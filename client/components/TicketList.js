const React = require('react');
const TicketSearch = require('./TicketSearch');
const TicketEntry = require('./ticketEntry');
const Issues = require('../js/issues');

class TicketList extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      ticketsToRender: []
    };
    
    this.getIssues = this.getIssues.bind(this);
    
    this.getIssues();
  }
  
  getIssues(searchTerm, language){
    //Fetch issues;
    var self = this;

    Issues.getIssues(function(data) {
      self.setState({
        ticketsToRender: data.slice(0,199)
      });
    }, console.log, searchTerm, language);
  }
  
  render () {
    
    //for really clean scrolling, we could do something like below to calculate the max height and then set the max height css 
    // var maxHeight = $(window).height() - $('.navbar').outerHeight() - margin * 2;
    
    return (
    <div>
      <TicketSearch searchHandler={this.getIssues} />
      <h4>Open Issues</h4>
      <div className="main-ticket-view">
          {this.state.ticketsToRender.map ((ticket, index) => 
            <TicketEntry data={ticket} key={index} />
          )}
      </div>
    </div>
    );  
  }
  
}

module.exports = TicketList;