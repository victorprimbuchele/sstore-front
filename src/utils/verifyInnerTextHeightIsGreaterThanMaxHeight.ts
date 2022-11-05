export function verifyInnerTextHeightIsGreaterThanMaxHeight(
  maxHeight: number,
  textElementId: string
) {
  const element = document.getElementById(textElementId);

  if (!element) {
    new Error("Não foi possível encontrar o elemento com o id fornecido");
    return false;
  }

  if (element.scrollHeight > maxHeight) {
    return true;
  }

  return false;
}
