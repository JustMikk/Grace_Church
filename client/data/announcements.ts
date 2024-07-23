"use server";
import fetcher from "./fetcher";

export async function getManyAnnouncements() {
  try {
    const response = await fetcher.get(`/announcements`);
    return response.data;
  } catch (error) {
    return { error };
  }
}
