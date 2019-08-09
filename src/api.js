import Axios from 'axios'

const request = Axios.create({
    baseURL: "https://sol-ncnews-bend.herokuapp.com/api"
  })

export const fetchAllArticles = (sort, topicArg, order)=>{
const sortBy = sort || ''
const orderBy = order || ''
const topic = topicArg || ''
return request.get(`/articles?sort_by=${sortBy}&&topic=${topic}`)
}

export const fetchCommentsByArticle = (article_id)=>{
  return request.get(`/articles/${article_id}/comments`)
  }

export const patchArticleVotes = (votes, article_id, url)=>{
return request.patch(`${url}${article_id}`,{ "inc_votes": votes })

}


// console.log("DOING SOMETHING WITHOUT COND");

// //check for sort here first
// if (
//   this.state.Articles === prevState.Articles &&
//   this.state.sortBy === null &&
//   this.state.sortBy === prevState.sortBy
// ) {
//   console.log("IN THE FIRST COND");
//   this.props.topic
//     ? Axios.get(
//         `https://sol-ncnews-bend.herokuapp.com/api/articles?topic=${
//           this.props.topic
//         }`
//       ).then(({ data }) => {
//         this.setState({ Articles: data.articles });
//       })
//     : Axios.get(
//         `https://sol-ncnews-bend.herokuapp.com/api/articles?${
//           this.props.topic
//         }`
//       ).then(({ data }) => {
//         this.setState({ Articles: data.articles });
//       });
// } else if (this.state.sortBy) {
//   console.log("SORTINGGG");
//   this.props.topic
//     ? Axios.get(
//         `https://sol-ncnews-bend.herokuapp.com/api/articles?sort_by=${
//           this.state.sortBy
//         }&&topic=${this.props.topic}`
//       ).then(({ data }) => {
//         this.setState({ Articles: data.articles });
//       })
//     : Axios.get(
//         `https://sol-ncnews-bend.herokuapp.com/api/articles?sort_by=${
//           this.state.sortBy
//         }`
//       ).then(({ data }) => {
//         this.setState({ Articles: data.articles });
//       });

//   this.setState({ sortBy: null });
// } else {
//   console.log("did nothing");
// }
