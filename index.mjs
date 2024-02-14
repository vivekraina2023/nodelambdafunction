import {helloworldFun} from "./src/intro.mjs"

export const lambdaHandler = async (event, context) => {
    try {
        helloworldFun();
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world response from app.mjs',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};
