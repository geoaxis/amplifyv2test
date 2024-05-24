"use server"

import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import config from '@/../../amplifyconfiguration.json'
import { cookies } from "next/headers"
import { getCurrentUser } from 'aws-amplify/auth';
import { log } from 'console';

export const { runWithAmplifyServerContext } = createServerRunner({
    config,
});

export const isAuthenticated = async () =>
    await runWithAmplifyServerContext({
        nextServerContext: { cookies },

        async operation(contextSpec) {
            try {
                const user = await getCurrentUser()
                return !!user;
            } catch (error) {
                return false;
            }
        }
    });


