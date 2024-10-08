import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { goalsProgress } from "../../modules/get-week-pending-goals";

export const listGoalsCompletionsRoute: FastifyPluginAsyncZod = async (
  server
) => {
  server.get("/pending-goals", async () => {
    const response = await goalsProgress();

    return response;
  });
};
