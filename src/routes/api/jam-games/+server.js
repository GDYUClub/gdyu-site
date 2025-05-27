export const prerender = true;
const jamIds = [
  "387735", // YUDUM 6
  "385223", // YUDUM 5
  "381550", // YUDUM 4
  "330428", // YUDUM 3
  "324065", // YUDUM 2
  "321360", // YUDUM 1
];

export const GET = async ({}) => {
  let promiseList = [];

  jamIds.forEach((jam) => {
    promiseList.push(
      new Promise((resolve, reject) => {
        fetch(`https://itch.io/jam/${jam}/entries.json`, { method: "GET" })
          .then((response) => response.json())
          .then((data) => {
            resolve(data.jam_games);
          })
          .catch((error) => {
            reject(error);
          });
      })
    );
  });

  let data = (await Promise.all(promiseList)).flat(1);

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
