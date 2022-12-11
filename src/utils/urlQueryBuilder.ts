export function urlQueryBuilder(queryKey: string, queryValue: string) {
  return `&${queryKeyDictionary(queryKey)}=${queryValue}`;
}

function queryKeyDictionary(queryKey: string) {
  const keyDict = {
    categoria: "category",
    marca: "manufacturer",
  } as any;

  return keyDict[queryKey];
}
