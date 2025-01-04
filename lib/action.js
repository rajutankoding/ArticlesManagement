"use server";
export const SaveData = async (formData) => {
  const data = Object.fromEntries(formData.get());
  console.log(data);
};
