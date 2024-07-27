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

export async function deleteAnnouncement(id: number) {
  try {
    const response = await fetcher.delete(`/announcements/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error deleting announcement:",
      error.response?.data || error.message
    );
    throw error;
  }
}
