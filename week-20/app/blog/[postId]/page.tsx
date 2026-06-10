import axios from "axios";

type Props = {
  params: Promise<{
    postId: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const { postId } = await params;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  const data = response.data;

  return (
    <div>
      Blog Page {postId}
      <br />
      title - {data.title}
      <br/>
      body - {data.body}
    </div>
  );
}
