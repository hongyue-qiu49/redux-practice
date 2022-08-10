import { rest } from "msw";
import {initialState} from "../reducer/todoSlice";

export const handlers = [
    rest.get('/todos', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(initialState),
        )
    })
]
