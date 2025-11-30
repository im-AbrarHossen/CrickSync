import dbConnect from "./dbConnect";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";


export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                // const res = await fetch("http://localhost:3000/api/login", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()

                // If no error and we have user data, return it
                // if (res.ok && user) {
                //     return user
                // }
                // // Return null if user data could not be retrieved
                // return null
                const { email, password } = credentials;
                const usersCollection = dbConnect("players");
                const user = await usersCollection.findOne({ email });

                if (!user) throw new Error("No user found with this email");

                const isPasswordOK = await bcrypt.compare(password, user.password);
                if (!isPasswordOK) throw new Error("Invalid password");

                // ✅ Update lastLogin timestamp
                await usersCollection.updateOne(
                    { email },
                    { $set: { lastLogin: new Date() } }
                );

                // Return safe user object
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    image: user.image || null,
                    lastLogin: new Date() // send to session token
                };
            }
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            // Connect to MongoDB
            const usersCollection = await dbConnect("players");

            // Get latest user from DB
            const dbUser = await usersCollection.findOne({ email: token.email });

            if (dbUser) {
                session.user = {
                    id: dbUser._id.toString(),
                    name: dbUser.name,
                    email: dbUser.email,
                    role: dbUser.role,
                    image: dbUser.image || '/assets/images/default-avatar.webp',
                    lastLogin: dbUser.lastLogin || null
                };
            }

            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.email = user.email
                token.name = user.name;
                token.role = user.role;               // ✅ add role
                token.image = user.image || null;     // optional default
                token.lastLogin = user.lastLogin || new Date();
            }
            return token
        }
    }
}