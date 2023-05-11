## Create Next App

~~~
C:\git\llm-tools>npx create-next-app@latest
Need to install the following packages:
  create-next-app@13.4.1
Ok to proceed? (y) y
√ What is your project named? ... next-monaco-redux
√ Would you like to use TypeScript with this project? ... No / Yes
√ Would you like to use ESLint with this project? ... No / Yes
√ Would you like to use Tailwind CSS with this project? ... No / Yes
√ Would you like to use `src/` directory with this project? ... No / Yes
√ Use App Router (recommended)? ... No / Yes
√ Would you like to customize the default import alias? ... No / Yes
Creating a new Next.js app in C:\git\llm-tools\next-monaco-react\next-monaco-redux.

Using npm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next
- typescript
- @types/react
- @types/node
- @types/react-dom
- eslint
- eslint-config-next


added 299 packages, and audited 300 packages in 18s

125 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created next-monaco-redux at C:\git\llm-tools\next-monaco-react\next-monaco-redux
~~~

## Configure GTS

~~~
C:\git\llm-tools\next-monaco-redux>npx gts init
version: 19
package.json already has a script for lint:
-next lint
+gts lint
? Replace No
Writing package.json...
{
  scripts: {
    dev: 'next dev',
    build: 'next build',
    start: 'next start',
    lint: 'next lint',
    clean: 'gts clean',
    compile: 'tsc',
    fix: 'gts fix',
    prepare: 'npm.cmd run compile',
    pretest: 'npm.cmd run compile',
    posttest: 'npm.cmd run lint'
  },
  devDependencies: { gts: '^3.1.1', typescript: '~4.7.0', '@types/node': '^14.11.2' }
}
./tsconfig.json already exists
? Overwrite No
./.eslintrc.json already exists
? Overwrite No
Writing ./.eslintignore...
build/

Writing ./.prettierrc.js...
module.exports = {
  ...require('gts/.prettierrc.json')
}

Writing ./.editorconfig...
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
insert_final_newline = true

Default template installed.

added 150 packages, changed 2 packages, and audited 450 packages in 9s

151 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
~~~

## Fixup package.json

Move dev dependencies to right place.

## Configure Jest

## Add Monaco

Install @monaco-editor/react
~~~
C:\git\llm-tools\next-monaco-redux>npm install @monaco-editor/react

added 4 packages, and audited 454 packages in 6s

151 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
~~~

Install monaco-editor and then move to peer dependences.
~~~
C:\git\llm-tools\next-monaco-redux>npm install monaco-editor 

up to date, audited 454 packages in 879ms

151 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
~~~

**IMPORTANT**: Add "use client" to the top of `page.tsx`.

## Add Redux

