# Random Password Generator

## Description

This web application serves to help build a random password for a user given a few circumstances. Building a secure password in today's age is a crucial concept for everyone who wishes to remain safe when browsing the web. Whether that's making sure someone can't easily guess your password, or making sure someone can't hack you from across the globe.

This web app allows you to decrease the likelihood of creating an easy to guess password like "password" by giving the user a series of random characters. The user will be prompted to enter a specified password length between 8 and 128 characters, then the user will be prompted with a series of questions such as:

"Do you want any uppercase characters?"
"Do you want any lowercase characters?"
"Do you want any special characters?"
"Do you want any numbers?"

Then using that infomation, an array will be built using a Javascript push method using pre built arrays of uppercase/lowercase/special/number characters. Once that array is built, then our for loop along with our math.floor math.random methods will build a string of random characters from our PUSHED array. This password will then be presented back to the user using a Query selector and changing the password text value to the users new password. 

A lot went into the making of this and the theory of functions really start to take hold as well as global and local variables. If statements and loops also became much more clear to me throughout this and I'm excited to see the full scope of Javascript in the future.

## Link to deployed URL

https://bmaggiano.github.io/random-password-generator/

## Screenshot of application

![image](https://user-images.githubusercontent.com/103971233/190818491-ceff76aa-56f0-445d-ae1c-39f6bbfc4e89.png)


## License

MIT License

Copyright (c) 2022 bmaggiano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
