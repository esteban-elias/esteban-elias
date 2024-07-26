interface Post {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string;
  spotifyUrl: string;
}

interface PostProps {
  post: Post;
}

interface ContactListItemProps {
  children: React.ReactNode;
  border?: boolean;
}
