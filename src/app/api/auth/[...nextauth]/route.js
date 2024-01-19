import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const updatedSession = {
        ...session,
        user: {
          ...session.user,
        },
      };
      return updatedSession;
    },
  },
  pages: {
    signIn: "/",
  },
});

export { handler as GET, handler as POST };
