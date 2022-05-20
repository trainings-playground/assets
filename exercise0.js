import { j as jsx, E as Exercise, P as PropTypes } from "./Exercise.js";
import "./export.js";
const sections = [{
  "id": "About the exercise",
  "value": "In this exercise, you will create a kubeadm cluster composed of one master node and 2 worker nodes.\n\nFor that purpose you will have access to 4 virtual machines:\n- a host VM\n- a VM named master\n- a VM named worker1\n- a VM named worker2\n\nYou will also have one terminal for each VM.\n\nFirst, let's initialize the terminals.\n\n- run a shell on the master node in the second terminal\n\n```command:host\nmaster\n```\n\n- run a shell on the worker1 node in the third terminal\n\n```command:host\nworker1\n```\n\n- run a shell on the worker2 node in the fourth terminal\n\n```command:host\nworker2\n```"
}, {
  "id": "Prerequisites",
  "value": "First, using the following commands, install the dependencies (the container runtime and a couple of libraries) on each node. Also note the version of the cluster is also specified.\n\nDependencies on the master:\n\n```command:master\ncurl https://luc.run/kubeadm/master.sh | VERSION=1.22.7 sh\n```\n\nDependencies on worker1:\n\n```command:worker1\ncurl https://luc.run/kubeadm/worker.sh | VERSION=1.22.7 sh\n```\n\nDependencies on worker2:\n\n```command:worker2\ncurl https://luc.run/kubeadm/worker.sh | VERSION=1.22.7 sh\n```"
}, {
  "id": "Initialisation of the cluster",
  "value": "Init the cluster from a shell on the master node\n\n```command:master\nsudo kubeadm init\n```\n\nAfter a few tens of seconds the initialisation will be completed and you will get the command to run on other VMs to add each of them to the cluster. This command will look similar to the following one:\n\n```\nkubeadm join 10.96.217.40:6443 --token ucvk2f.vsj6636g36lwwu6x \\\n	--discovery-token-ca-cert-hash sha256:d772772e54e30d1ae2bc80590d43f3fdf73e1e505b2d551053489786c3338464\n```\n\nStill from the master node, retrieve the admin kubeconfig and save it in $HOME/.kube/config (default location to configure kubectl client)\n\n```command:master\nmkdir $HOME/.kube\nsudo cat /etc/kubernetes/admin.conf > $HOME/.kube/config\n```"
}, {
  "id": "Add worker nodes",
  "value": "Run the above command on worker1 and worker2 to add these nodes to the cluster.\n\nWhen this is done, list the cluster's nodes from the master. You should now see the cluster contains 3 nodes:\n\n```command:master\nk get no\nNAME      STATUS     ROLES                  AGE     VERSION\nmaster    NotReady   control-plane,master   7m7s    v1.22.7\nworker1   NotReady   <none>                 4m54s   v1.22.7\nworker2   NotReady   <none>                 4m14s   v1.22.7\n```"
}, {
  "id": "Network plugin",
  "value": "The above result shows the cluster is not ready yet, we need to install a network plugin first. In this example we will install WeaveNet but another network plugin could be installed instead.\n\n```command:master\nkubectl apply -f \"https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\\n')&env.IPALLOC_RANGE=10.32.0.0/16\"\n```\n\nAfter a few tens of seconds the cluster will be ready:\n\n```command:master\nk get no\n```"
}, {
  "id": "Get kubeconfig on the host machine",
  "value": "In case you deployed the VM with multipass, use the following command from the host machine to get the admin kubeconfig:\n\n```command:host\nmultipass exec master -- sudo cat /etc/kubernetes/admin.conf > kubeconfig.cfg\nmkdir $HOME/.kube && cp kubeconfig.cfg $HOME/.kube/config\n```\n\nYou can now communicate with the cluster from the host machine directly (without sshing on the master node anymore)\n\n```command:host\nk get no\n```"
}];
const terminals = ["host", "master", "worker1", "worker2"];
function ExoConsumer({
  renderSections,
  onClickCmd
}) {
  return /* @__PURE__ */ jsx(Exercise, {
    sections,
    renderSections,
    onClickCmd
  });
}
ExoConsumer.terminals = terminals;
ExoConsumer.propTypes = {
  renderSections: PropTypes.func,
  sections: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  onClickCmd: PropTypes.func
};
ExoConsumer.defaultProps = {
  onClickCmd: () => {
  },
  renderSections: () => /* @__PURE__ */ jsx("span", {})
};
export { ExoConsumer as default };
