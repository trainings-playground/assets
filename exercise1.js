import { j as jsx, E as Exercise, P as PropTypes } from "./Exercise.js";
import "./export.js";
const sections = [{
  "id": "About this exercise",
  "value": "In this exercise we will consider a very simple application and see how to perform the following tasks:\n\n- run this applicaton on a simple Ubuntu VM\n- run the application in a container\n- deploy that container in a Kubernetes cluster\n\nTo perform those tasks you will have access to a terminal on a Ubuntu VM. This VM is configured to communicate with a real SKS cluster (Exoscale Mamaged Kubernetes) as you will see below."
}, {
  "id": "Sample application",
  "value": "This sample application is a simple web server written in javascript and which will thus run with NodeJS.\n\nFirst we create a folder dedicated to this application\n\n```command:host\nmkdir /app\ncd /app\n```\n\nNext we copy the source code of our sample app inside that folder:\n\n```file:host:/app/app.js\nconst express = require('express\u2019);\nconst app = express();\nconst port = 3000;\napp.get('/', (req, res) => { \n    res.send('Hello World!\u2019);\n});\napp.listen(port, () => {\n    console.log(`Example app listening at http://localhost:${port}`);\n});\n```\n\nNodeJS needs to be installed (it is installed on your host VM) then the app can be run with the following command:\n\n```command:host\nnode app.js\n```\n\nIn command line you can access the application with a simple curl\n\n```command:host\ncurl localhost:3000\n```"
}, {
  "id": "About running the app on a standard VM",
  "value": "The previous steps show how easy it is to run web-based applications, but they also illustrate some kind of complexity regarding the management of the dependencies. You need to install NodeJS beforehand, in addition you also have to use the proper versions of the software components in place and take care of all dependencies (runtime environments, libraries, ...) for the application to run properly.\n\nIf you want to install the application on a Linux host (for instance an Ubuntu VM) you need to perform quite a lot of steps actually:\n\n- install dependencies on the Linux host\n- get the application repository\n- install the NodeJS interpreter\n- install the dependencies of the application\n- and finally run the application\n\nIf you want to run the same application on another host (Fedora, ...) some of the commands might be slightly differents so this is not easily portable."
}, {
  "id": "Running the app in a container",
  "value": 'Linux containes exist since quite some time, but Docker made then available to everyone a couple of years ago only. They are a great way to run processes in an isolated way and to package them in Container Image.\n\nIn order to package the application in a container image, you first need to write a Dockerfile, this one defines a set of instructions which details what the image contains.\n\nLet\'s create a simple Dockerfile to package the application defined above. Before actually creating the file, let\'s see what instructions are used:\n\nFirst we indicate the base image our image will be based on:\n\n```\nFROM node:16-alpine\n```\n\nnext we install additional software\n\n```\nRUN apk add --no-cache python g++ make\n```\n\nand create and use the directory /app inside the container\n\n```\nWORKDIR /app\n```\n\nnext we copy everything where the Dockerfile is in, into the container under /app:\n- 1st parameter: local directory (./ is the directory where the Dockerfile is)\n- 2nd parameter: target directory inside the container\n\n```\nCOPY . .\n```\n\nnext we install the application dependencies (using npm for our nodejs application)\n\n```\nRUN npm install\n```\n\nthen we specify the command to run the application (to run a container based on the image)\n\n```\nCMD ["node", "src/index.js"]\n```\n\nLet\'s copy the above content into a file named Dockerfile:\n\n```file:host:/app/Dockerfile\nFROM node:12-alpine\nRUN apk add --no-cache python g++ make\nWORKDIR /app\nCOPY . .\nRUN npm install\nCMD ["node", "src/index.js"]\n```'
}, {
  "id": "Build & Run",
  "value": "Once a Dockerfile is defined for our application, we build the image:\n\n```command:host\ndocker image build -t app:1.0 .\n```\n\nnext we can run a container based on the image\n\n```command:host\ndocker run -d -p 8080:8080 app:1.0\n```\n\nNote: docker has many commonly used flag, -d runs the container useProcess in backagroud, -p map a container port with a port on the host machine"
}, {
  "id": "Distributing the image",
  "value": "Once the image is created, we need to publish the image to a registry so it can be used by other users. The DockerHub is probably the more famous registry out there even if many solutions exist (both as SaaS or to be installed on-prem).\n\nWe will not go into the useProcess of publishing the image to your own \nregistry's repository here (as you would need to create your own DockerHub account first).\n\nFor this exercise, the image created above has already been published to the DockerHub. It is available as the techwhale/app:1.0 image. \n\nSummary: we have defined a sample application, packaged that one into a container image and have this image available in a registry. In the next step we will introduce Kubernetes and run the image in that orchestration solution."
}, {
  "id": "From Docker to Kubernetes",
  "value": "If you want to scale all the container benefits to an entire IT environment, you need additional functions to coordinate, scale, manage, and automate. For example, taking containerized applications from your local machine to your local server can be done without additional help.\nStill, if you want to do this with 10, 100, or even 1000 applications and start distributing the workloads, clustering them for higher availability and stability in operations to serve the 24/7 demands of today's customers, you need additional help. This help for containerized applications is Kubernetes. This help for a scaleable, available, and more flexible infrastructure is Exoscale."
}, {
  "id": "Overview of the architecture of a  Kubernetes cluster",
  "value": ""
}, {
  "id": "Basic commands on Kubernetes",
  "value": "To get a feeling for this new world, lets have a look at some simple applications of the kubectl command.\n\nGet the client and server versions:\n\n```command:host\nkubectl version\n```\n\nList the cluster's nodes:\n\n```command:host\nkubectl get nodes\n```\n\nList the running pods:\n\n```command:host\nkubectl get pods\n```\n\nNote: Pods is an abstraction on top of containers (acutally, containers run inside pods)"
}, {
  "id": "Simple examples",
  "value": "Let's look at two examples:\n\n- first, a simple hello-world container\n\nsimple hello-world container\n\n```command:host\nkubectl run ...\n```\n\n- and second, a simple ubuntu container\n\n```command:host\nkubectl run test -i --rm --tty --image=ubuntu -- bash\n```"
}, {
  "id": "Running our sample application",
  "value": "To get one step further, we will now deploy a sample micro-services applications\n\n```command:host\nkubectl apply -f https://luc.run/vote.yaml\n```"
}];
const terminals = ["host"];
function ExoConsumer({
  renderSections,
  renderNextSection,
  onClickCmd
}) {
  return /* @__PURE__ */ jsx(Exercise, {
    sections,
    renderSections,
    renderNextSection,
    onClickCmd
  });
}
ExoConsumer.terminals = terminals;
ExoConsumer.sections = sections;
ExoConsumer.propTypes = {
  renderSections: PropTypes.func,
  renderNextSections: PropTypes.func,
  sections: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  onClickCmd: PropTypes.func
};
ExoConsumer.defaultProps = {
  onClickCmd: () => {
  },
  renderSections: () => /* @__PURE__ */ jsx("span", {}),
  renderNextSection: () => /* @__PURE__ */ jsx("span", {})
};
export { ExoConsumer as default };
