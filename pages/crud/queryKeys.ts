export const queryKeys = {
  posts: ['posts'] as const,
  createPost: (id: number, title: string, body: number) =>
    ['createPost', id, title, body] as const,
};
