// I imagine this would be some kind of db specific ORM type like sequelize or mongoose
export type BookEntity = {
	id: number;
	title: string;
	authorId: number;
};