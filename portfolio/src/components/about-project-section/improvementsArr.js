const improvements = [
  {
    id: 0,
    wrongs:
      "<li> The request to the API <span> (well, not directly to the API, it was made through a proxy server),</span> I should have done it in steps for that requested data, so all that chunk of data would travel in multiple requests. The bad thing of what I did is that when there is no decent conection to the internet, that data will travel very slow and it will take a long time to arrive and be displayed to the user.</li>",
    updates:
      "<li> Now the requests are made when the user clicks to go to the next page or prev page. Each click will trigger the request function and will retrieve 20 game objects from the server.</li>",
  },
  {
    id: 1,
    wrongs: "<li>The way the searchbar works could be improved.</li>",
    updates: "<li>But I'm too lazy to bother with this.</li>",
  },
];
export default improvements;
