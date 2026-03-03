import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { expo } from "@better-auth/expo";
import { prisma } from "./db.js";

export const auth = betterAuth({
  plugins: [expo()],
  database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: { 
    enabled: true, 
  }, 
   trustedOrigins: [
        // Basic scheme
        "mobile://", 
        ...(process.env.NODE_ENV !== "production" ? ["exp://","exp://**","exp://192.168.*.*:*/**"] : []),
    ],
    debug: process.env.NODE_ENV !== "production",
    allowDangerousConnections: process.env.NODE_ENV !== "production"
});