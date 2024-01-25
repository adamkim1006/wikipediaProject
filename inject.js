
//CLASS GRAPH Constructor
class Graph {
    constructor(){
        this.adjacencyList = {}
    }
//Graph Methods
    //adds vertex/node to the graph
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    //adds an edge between two node. not directional
    // we might need to make this directional since the URL will only be clicking one way

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
    }

}

const input = "URL Landing Page Title";//Find how to pull this from wiki page
const wikiGraph = new Graph();
wikiGraph.addVertex('ceramics');


const pageLinks = [];
const links = document.querySelectorAll('#content a'); 

links.forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.startsWith('/wiki/')) {
    const pageTitle = href.replace('/wiki/', '');
    wikiGraph.addEdge('Ceramics', pageTitle)
  }
})

console.log(pageLinks);

// console.log(pageTitle)

// fill graph with page links from start page
pageLinks.forEach((pageTitle, index) => {
    if (index > 0) {
        wikiGraph.addEdge(pageLinks[index-1], pageTitle);
    }
    
});

console.log(wikiGraph)

//fetch API
//current URL is a node and has edges to all Hyperlinks on page
fetch(`https://en.wikipedia.org/api/rest_v1/page/title/ceramics`)//${input}
.then(function (data){
    return data.json();
});






//As we populate the adjacency list of URLS, we will return 
//the adjacency list of the list or lists that contain the TARGET URL
// once target is hit, stop adding to list
//get lenghth property of each list and return as "shortest clicks"