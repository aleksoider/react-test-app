import React, { Component } from 'react';
import './TabPanel.css';

class Tab extends Component {
    render() {
        return (
            <div className="Tab">{this.props.tab.tabName}</div>
        );
    }
}

class TabLabelContainer extends Component {
    render() {
        const tabs = [];
        this.props.tabs.forEach((tab) => {
            tabs.push(
            <Tab
                tab={tab}
                key={tab.id} />
          );
        });
        return (
            <div className="TabLabelContainer">
                {tabs}
                <div className="space"/>
            </div>
        );
    }
}

class TabContainer extends Component {
    render() {
        return(
            <div className="TabContainer">{this.props.tab.tabForm}</div>
        );
    }
}

class TabPanel extends Component {
    render() {
        var currentTab = this.props.tabs[0];
//        this.props.tabs.forEach((tab) => {
//        });
        return(
            <div className="TabPanel">
                <TabLabelContainer tabs={this.props.tabs}/>
                <TabContainer tab={currentTab}/>
            </div>
        );
    }
}

export default TabPanel;