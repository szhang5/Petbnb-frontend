import React, { Component } from "react";
import styles from "./styles/profileStyle";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./styles/searchStyle.css";
import {
  ReactiveBase,
  SingleDropdownList,
  NumberBox,
  DateRange,
  RangeSlider,
  ResultCard
} from "@appbaseio/reactivesearch";

class Search extends Component {
  showprice() {
    document.getElementById("myDropdownprice").classList.toggle("show");
  }
  showpets() {
    document.getElementById("myDropdownpets").classList.toggle("show");
  }
  showwhen() {
    document.getElementById("myDropdownwhen").classList.toggle("show");
  }
  showtype() {
    document.getElementById("myDropdowntype").classList.toggle("show");
  }

  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="housing"
          credentials="0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5"
        >
          <div className="filters-search-container">
            <div className="dropdown">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.showtype}
                className="button"
              >
                Pet Type
              </Button>
              <div className="dropdown-content" id="myDropdowntype">
                <SingleDropdownList
                  componentId="PetSensor"
                  dataField="property_type"
                  size={100}
                />
              </div>
            </div>
            <div className="dropdown">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.showprice}
                className="button"
              >
                Price
              </Button>

              <div className="dropdown-content" id="myDropdownprice">
                <RangeSlider
                  componentId="PriceSensor"
                  dataField="price"
                  title="Price Range"
                  range={{
                    start: 10,
                    end: 250
                  }}
                  rangeLabels={{
                    start: "$10",
                    end: "$250"
                  }}
                  defaultSelected={{
                    start: 10,
                    end: 50
                  }}
                  stepValue={10}
                  interval={20}
                  //react={{
                  //  and: ["DateRangeSensor", "GuestSensor"]
                  // }}
                  className="rangeFilter"
                />
              </div>
            </div>
            <div className="dropdown">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className="button"
                onClick={this.showpets}
              >
                Pets Number
              </Button>
              <div className="dropdown-content" id="myDropdownpets">
                <NumberBox
                  componentId="NumberSensor"
                  dataField="accommodates"
                  // title="Pets"
                  defaultSelected={2}
                  labelPosition="right"
                  data={{
                    start: 1,
                    end: 16
                  }}
                  className="numberFilter"
                />
              </div>
            </div>
            <div className="dropdown">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className="button "
                onClick={this.showwhen}
              >
                When
              </Button>
              <div className="dropdown-content" id="myDropdownwhen">
                <DateRange
                  dataField={["date_from", "date_to"]}
                  componentId="DateRangeSensor"
                  //  title="When"
                  numberOfMonths={1}
                  queryFormat="basic_date"
                  extra={{
                    initialVisibleMonth: () => moment("2017-04-01")
                  }}
                />
              </div>
            </div>
            <ResultCard
              className="card-container"
              componentId="SearchResult"
              dataField="name"
              // showResultStats={false}
              from={0}
              size={20}
              onData={this.onData}
              pagination={true}
              react={{
                and: [
                  "PetSensor",
                  "PriceSensor",
                  "NumberSensor",
                  "DateRangeSensor"
                ]
              }}
            />
            <div />
          </div>
        </ReactiveBase>
      </div>
    );
  }
  onData(data) {
    return {
      image: data.image,
      title: data.name,
      description: (
        <div className="flex book-content">
          <div>
            <div className="price">${data.price}</div>
            <p>{data.room_type}</p>
            <p>{data.accommodates} pets</p>
          </div>
        </div>
      )
    };
  }
}
export default withRouter(withStyles(styles)(Search));
