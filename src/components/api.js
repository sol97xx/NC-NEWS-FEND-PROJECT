import Axios from "axios";

const request = Axios.create({
  baseURL: "https://sol-ncnews-bend.herokuapp.com/api"
});

export const fetchAllArticles = (sort_by, topic) => {
  return request.get(`/articles`, { params: { sort_by, topic } });
};

export const getSingleArticle = article_id => {
  return request(`/articles/${article_id}`);
};

export const fetchCommentsByArticle = article_id => {
  return request.get(`/articles/${article_id}/comments`);
};

export const patchArticleVotes = (votes, article_id, url) => {
  return request.patch(`${url}${article_id}`, { inc_votes: votes });
};

export const postComment = (id, body, user) => {
  return request.post(`/articles/${id}/comments`, {
    username: user,
    body: body
  });
};

export const deleteComment = id => {
  return request.delete(`/comments/${id}`);
};
