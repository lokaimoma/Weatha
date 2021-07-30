export default async function fetcher(url) {
  const result = await fetch(url);
  const data = await result.json();

  if (result.status != 200) {
    throw new Error(data.message);
  }
  return data;
}
