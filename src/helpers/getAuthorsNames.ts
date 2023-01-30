import { IAuthor } from 'models/author.model';

export function getAuthorsNames(
	authorsIds: string[],
	authors: IAuthor[]
): string {
	const arrOfNames = authorsIds.map(
		(authorId: string) => authors.find((author) => author.id === authorId)?.name
	);
	return arrOfNames.join(', ');
}
