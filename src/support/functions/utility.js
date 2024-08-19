//puts all words in a sentence to lower case, with dashes and no spaces
export function makeSlug(sentence) {
  return sentence
    .toString()
    .replaceAll(" ", "-")
    .replaceAll(",", "")
    .replaceAll("'", "")
    .trim()
    .toLowerCase();
}

//keeps the site-general way of constructing a button link in one place in case of changes
export function makeLink(mainCategory, slug) {
  return `/${mainCategory}/${slug}/`;
}

//Separates out the title from and makes all words in a sentence into individual words which begin with an upper case letter.

export function makeTitle(sentence) {
  let words = sentence
    .toString()
    .trim()
    .replaceAll("-", " ")
    .replaceAll("/", "")
    .split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

//Adds all the subcategories and'by' arrays together
export function listSubcategories(frontmatter) {
  let arr = [];
  if (frontmatter.subcategories) {
    arr.concat(frontmatter.subcategories);
  }
  if (frontmatter.by_course) {
    arr.concat(frontmatter.by_course);
  }
  if (frontmatter.by_diet) {
    arr.concat(frontmatter.by_diet);
  }
  if (frontmatter.by_ingredient) {
    arr.concat(frontmatter.by_ingredient);
  }
  return arr;
}

//Reduce the length of a sentence
export function reduceSentenceLength(sentence, requiredLength) {
  return sentence.length < requiredLength
    ? sentence
    : sentence.split("").slice(0, requiredLength).join("").concat("...");
}

//Matches an array against a qraphql node array
export function filterList(listOfChoicesArray, nodeArrayToFilter) {
  const filteredArray = listOfChoicesArray.map((choice) =>
    nodeArrayToFilter.filter((node) => node.frontmatter.slug === `${choice}`),
  );
  return filteredArray.flat();
}
//Takes the date and returns the correct day.
export function today() {
  const date = new Date().getDay();
  switch (date) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Today";
  }
}
//Returns a random number between 2 numbers inclusive
export function randomNumber(min, max) {
  const _min = Number(min);
  const _max = Number(max);
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}
