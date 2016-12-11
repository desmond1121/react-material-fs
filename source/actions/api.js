/**
 * Created by desmond on 12/11/16.
 */
'use strict';
import { combinePath } from 'store/utils';

const host = process.env.API_HOST;
const port = process.env.API_PORT;

const url = `http://${host}:${port}/static`;

export const getFilePath = (path) => (combinePath(url, path));