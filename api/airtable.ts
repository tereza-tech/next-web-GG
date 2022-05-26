import type { NextApiRequest, NextApiResponse } from 'next'
import { env } from 'process';

type Data = {
  name: string
}

export interface AnyContact {
  contact: String;
}

export interface FormData {
    email: String;
    name: String;
    message: String;
    phone: String;
    callback: String;
}

const Airtable = require('airtable');
const base = new Airtable({apiKey: env.AIRTABLE_API_KEY}).base('app48cuvzN6GPTSlx');


let test:FormData = {
    "email": 'tereza.tech@gmail.com',
    "name": 'Tereza',
    "message": 'Zpráva',
    "phone": '777253732',
    "callback": '15-17',
}

export function mockSubmit() {
    formSubmit(test)
}

export function formSubmit(
  req: FormData,
  res?: NextApiResponse<Data>
) {
    base('form_subm').create([
        {
          "fields": {
            "email": req.email,
            "name": req.name,
            "message": req.message,
            "phone": req.phone,
            "callback": req.callback
          }
        }
      ], function(err:Error, records:any) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record:any) {
          console.log(record.getId());
        });
      });
  res?.status(200).json({ name: 'Brzy Vás kontaktujeme!' })
}


