
'use strict';

require('dotenv').config();
const { response } = require("express");
const { Configuration, OpenAIApi } = require("openai");


const chat = async (req, res) => {
    const chat = req.body.chat
    const api  = req.body.api

    if (api == 'NONE'){
        global.api_key = process.env.OPENAI_API_KEY;
    }else{
        global.api_key = api;
    }

    const configuration = new Configuration({
        apiKey: api_key,
      });

    const openai = new OpenAIApi(configuration);

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: chat,
            max_tokens: 2048,
		    temperature: 1,
        });

        return res.json({
                    status: "success",
                    code : 200,
                    message : "success run opeen ai",
                    data : response.data.choices[0]
                })

      } catch (error) {
        if (error.response) {
            
            return res.json({
                status: "failed",
                code : error.response.status,
                message : error.response.data,
            })

            
        } else {
            return res.json({
                status: "failed",
                code : 400,
                message : error.message,
            })
        }
      }
}

module.exports = chat;
