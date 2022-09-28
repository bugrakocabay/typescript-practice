export interface TodoItem {
	text: string;
	id: string;
	isDone: boolean;
}

export interface TodoReqBody extends Pick<TodoItem, "text"> {}

export interface SuccessResponse {
	msg: string;
}
