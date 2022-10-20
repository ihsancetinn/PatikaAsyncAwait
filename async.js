const posts = [
  { name: "Post1", author: "Post1" },
  { name: "Post2", author: "Post2" },
  { name: "Post3", author: "Post3" },
  { name: "Post4", author: "Post4" },
  { name: "Post5", author: "Post5" },
];
const newPosts = () => {
  posts.map((post, id) => {
    console.log(post.name, post.author);
  });
};

const addPost = (addNewPost) => {
  return new Promise((res, rej) => {
    if (addNewPost) {
      posts.push(addNewPost);
      res("Ekleme Başarılı");
    } else {
      rej("Ekleme Başarısız");
    }
  });
};
const showPostsList = async () => {
  try {
    let postEkle = await addPost({
      name: "Post6",
      author: "Post6",
    });
    if (postEkle) {
      return newPosts();
    }
  } catch (error) {
    console.log("error:", error);
  }
};
showPostsList();
