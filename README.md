# angulartraining
 
1. npm install -g @angular/cli

2. ng new angulartraining

3. 

ng generate component CourseDashboard

ng generate component Header 

ng generate component Footer 


ng g interface user-interface

ng g class user-interface

ng g pipe

ng g directive


4. Recomendation 


1.Merge request 

2.Formatting

3.Need review and ping 

4.Use strict : true

5. Assign default or empty value

6. Add question mark at the end of variable, to get suggestion

Use ngBootstrap - use button primary and so on.




recommended plugins for VS Code
https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint
https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify
 
recommended configuration for plugins (change the file in /.vscode/settings.json )

{
    "editor.renderWhitespace": "all",
    "editor.wordWrap": "on",
    "html.format.wrapAttributes": "force-aligned",
    "prettier.printWidth": 120,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "es5",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
   },
    "[less]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[scss]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    }
}


 
Add to package.json next modules 
"angular-tslint-rules": "1.20.0",

"husky": "3.0.5",
"prettier": "~1.18.0",
"rxjs-tslint-rules": "~4.25.0",
and next commands

"prettier": "prettier --config ./.prettierrc --list-different \"{projects/*/src,src/app}/**/*.{ts,js,css,scss,json}\""
and
"precommit": "npm run prettier && npm run lint"

 
in the file tslint.json change the first line to
 


  "extends": ["rxjs-tslint-rules"],
  "rulesDirectory": ["node_modules/codelyzer"]

 
Add to project root folder next files
.htmlhintrc

{
  "alt-require": true,
  "attr-lowercase": false,
  "attr-no-duplication": true,
  "attr-value-double-quotes": true,
  "doctype-first": false,
  "id-unique": true,
  "space-tab-mixed-disabled": "space",
  "spec-char-escape": true,
  "src-not-empty": true,
  "tag-pair": true,
  "tagname-lowercase": true,
  "title-require": true
}

.jsbeatufyrc

{
  "js": {},
  "indent_size": 2,
  "wrap_attributes": "force",
  "wrap_attributes_indent_size": 4,
  "end_with_newline": true
}

.prettierrc

{
  "printWidth": 120,
  "singleQuote": true,
  "useTabs": false,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "trailingComma": "all"
}