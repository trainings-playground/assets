import { j as t, E as r, p as e } from "./Exercise.js";
import "./export.js";
const a = [{
  id: "About this exercise",
  value: `In this exercise we will consider a very simple application and see how to perform the following tasks:

- run this applicaton on a simple Ubuntu VM
- run the application in a container
- deploy that container in a Kubernetes cluster

To perform those tasks you will have access to a terminal on a Ubuntu VM. This VM is configured to communicate with a real SKS cluster (Exoscale Mamaged Kubernetes) as you will see below.`
}, {
  id: "Sample application",
  value: `This sample application is a simple web server written in javascript and which will thus run with NodeJS.

First we create a folder dedicated to this application

\`\`\`command:host
mkdir /app
cd /app
\`\`\`

Next we copy the source code of our sample app inside that folder:

\`\`\`file:host:/app/app.js
const express = require('express\u2019);
const app = express();
const port = 3000;
app.get('/', (req, res) => { 
    res.send('Hello World!\u2019);
});
app.listen(port, () => {
    console.log(\`Example app listening at http://localhost:\${port}\`);
});
\`\`\`

NodeJS needs to be installed (it is installed on your host VM) then the app can be run with the following command:

\`\`\`command:host
node app.js
\`\`\`

In command line you can access the application with a simple curl

\`\`\`command:host
curl localhost:3000
\`\`\``
}, {
  id: "About running the app on a standard VM",
  value: `The previous steps show how easy it is to run web-based applications, but they also illustrate some kind of complexity regarding the management of the dependencies. You need to install NodeJS beforehand, in addition you also have to use the proper versions of the software components in place and take care of all dependencies (runtime environments, libraries, ...) for the application to run properly.

If you want to install the application on a Linux host (for instance an Ubuntu VM) you need to perform quite a lot of steps actually:

- install dependencies on the Linux host
- get the application repository
- install the NodeJS interpreter
- install the dependencies of the application
- and finally run the application

If you want to run the same application on another host (Fedora, ...) some of the commands might be slightly differents so this is not easily portable.`
}, {
  id: "Running the app in a container",
  value: `Linux containes exist since quite some time, but Docker made then available to everyone a couple of years ago only. They are a great way to run processes in an isolated way and to package them in Container Image.

In order to package the application in a container image, you first need to write a Dockerfile, this one defines a set of instructions which details what the image contains.

Let's create a simple Dockerfile to package the application defined above. Before actually creating the file, let's see what instructions are used:

First we indicate the base image our image will be based on:

\`\`\`
FROM node:16-alpine
\`\`\`

next we install additional software

\`\`\`
RUN apk add --no-cache python g++ make
\`\`\`

and create and use the directory /app inside the container

\`\`\`
WORKDIR /app
\`\`\`

next we copy everything where the Dockerfile is in, into the container under /app:
- 1st parameter: local directory (./ is the directory where the Dockerfile is)
- 2nd parameter: target directory inside the container

\`\`\`
COPY . .
\`\`\`

next we install the application dependencies (using npm for our nodejs application)

\`\`\`
RUN npm install
\`\`\`

then we specify the command to run the application (to run a container based on the image)

\`\`\`
CMD ["node", "src/index.js"]
\`\`\`

Let's copy the above content into a file named Dockerfile:

\`\`\`file:host:/app/Dockerfile
FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "src/index.js"]
\`\`\``
}, {
  id: "Build & Run",
  value: "Once a Dockerfile is defined for our application, we build the image:\n\n```command:host\ndocker image build -t app:1.0 .\n```\n\nnext we can run a container based on the image\n\n```command:host\ndocker run -d -p 8080:8080 app:1.0\n```\n\nNote: docker has many commonly used flag, -d runs the container useProcess in backagroud, -p map a container port with a port on the host machine"
}, {
  id: "Distributing the image",
  value: `Once the image is created, we need to publish the image to a registry so it can be used by other users. The DockerHub is probably the more famous registry out there even if many solutions exist (both as SaaS or to be installed on-prem).

We will not go into the useProcess of publishing the image to your own 
registry's repository here (as you would need to create your own DockerHub account first).

For this exercise, the image created above has already been published to the DockerHub. It is available as the techwhale/app:1.0 image. 

Summary: we have defined a sample application, packaged that one into a container image and have this image available in a registry. In the next step we will introduce Kubernetes and run the image in that orchestration solution.`
}, {
  id: "From Docker to Kubernetes",
  value: `If you want to scale all the container benefits to an entire IT environment, you need additional functions to coordinate, scale, manage, and automate. For example, taking containerized applications from your local machine to your local server can be done without additional help.
Still, if you want to do this with 10, 100, or even 1000 applications and start distributing the workloads, clustering them for higher availability and stability in operations to serve the 24/7 demands of today's customers, you need additional help. This help for containerized applications is Kubernetes. This help for a scaleable, available, and more flexible infrastructure is Exoscale.`
}, {
  id: "Overview of the architecture of a  Kubernetes cluster",
  value: ""
}, {
  id: "Basic commands on Kubernetes",
  value: `To get a feeling for this new world, lets have a look at some simple applications of the kubectl command.

Get the client and server versions:

\`\`\`command:host
kubectl version
\`\`\`

List the cluster's nodes:

\`\`\`command:host
kubectl get nodes
\`\`\`

List the running pods:

\`\`\`command:host
kubectl get pods
\`\`\`

Note: Pods is an abstraction on top of containers (acutally, containers run inside pods)`
}, {
  id: "Simple examples",
  value: `Let's look at two examples:

- first, a simple hello-world container

simple hello-world container

\`\`\`command:host
kubectl run ...
\`\`\`

- and second, a simple ubuntu container

\`\`\`command:host
kubectl run test -i --rm --tty --image=ubuntu -- bash
\`\`\``
}, {
  id: "Running our sample application",
  value: "To get one step further, we will now deploy a sample micro-services applications\n\n```command:host\nkubectl apply -f https://luc.run/vote.yaml\n```"
}], l = ["host"];
function n({
  renderSections: o,
  renderNextSection: i,
  onClickCmd: s
}) {
  return /* @__PURE__ */ t(r, {
    sections: a,
    renderSections: o,
    renderNextSection: i,
    onClickCmd: s
  });
}
n.terminals = l;
n.sections = a;
const c = e.exports.shape({
  id: e.exports.string.isRequired,
  value: e.exports.string.isRequired
});
n.propTypes = {
  renderSections: e.exports.func,
  renderNextSections: e.exports.func,
  sections: e.exports.arrayOf(c),
  onClickCmd: e.exports.func
};
n.defaultProps = {
  onClickCmd: () => {
  },
  renderSections: () => /* @__PURE__ */ t("span", {}),
  renderNextSection: () => /* @__PURE__ */ t("span", {}),
  sections: []
};
export {
  n as default
};
