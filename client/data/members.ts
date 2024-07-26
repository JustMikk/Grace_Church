"use server";
import fetcher from "./fetcher";

export async function getManyMembers() {
  try {
    const response = await fetcher.get(`/members`);
    return response.data;
  } catch (error) {
    return { error };
  }
}
