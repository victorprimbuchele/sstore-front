export function getQueryKeysAndValues(searchParams: string) {
  const removedQuestionMark = searchParams.slice(1, searchParams.length);
  let queryParamsArr = [];

  if (removedQuestionMark.includes("&")) {
    queryParamsArr = removedQuestionMark.split("&");

    const queryParamsKeyAndValue = [];

    for (let i = 0; i < queryParamsArr.length; i++) {
      queryParamsKeyAndValue.push({
        key: queryParamsArr[i].slice(0, removedQuestionMark.indexOf("=")),
        value: queryParamsArr[i].slice(
          removedQuestionMark.indexOf("=") + 1,
          removedQuestionMark.length
        ),
      });
    }

    return queryParamsKeyAndValue;
  }


  return [
    {
      key: removedQuestionMark.slice(0, removedQuestionMark.indexOf("=")),
      value: removedQuestionMark.slice(
        removedQuestionMark.indexOf("=") + 1,
        removedQuestionMark.length + 1
      ),
    },
  ];
}
