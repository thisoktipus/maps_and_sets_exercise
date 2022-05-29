const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);

//adding to a set//
bannedHashTags.add("bestlife");

//checking if a value is in a set//
bannedHashTags.has("yolo");

//function to remove bannedHashTags for a list of hashtags//
function filterHashtags(hashtags) {
  const bannedHashTags = new Set(["nofilter", "justsaying", "winning", "yolo"]);
  return hashtags.filter((tag) => !bannedHashTags.has(tag));
}

//remove duplicates//
const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
[...new Set(ages)];
