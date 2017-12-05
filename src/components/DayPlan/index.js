
import React from 'react';
import { Map } from 'feuxworks';
import { compose, lifecycle } from 'recompose';
import { Box } from 'grid-styled';
import moment from 'moment';
import styled from 'styled-components';
import SwipeSlider from '../SwipeSlider';
import Collapsable from '../Collapsable';

const formatDate = date => moment(date).format('YYYY-MM-DD');

const enhance = compose(lifecycle({
  componentWillMount() {
    const {
      country, start, end, tripId,
    } = this.props;
    const planner = localStorage.getItem(`planFor.TripId.${tripId}`);

    if (planner) {
      this.props.hasPlan({ tripId, planner: JSON.parse(planner) });
    } else if (country) {
      this.props.getPlan({
        location: country,
        start: formatDate(start),
        end: formatDate(end),
        tripId,
      });
    }
  },
}));

const POIImage = styled.img`
	max-height: 300px;
`;

const MapContainer = styled.div`
position: relative;
left: 0rem;

width: 100%;
height: 18rem;
background-color: #fff;
`;
const CallToFocus = styled.h2`
font-weight: 200;
margin-bottom: 0;
color: rgba(0, 0, 0, .6);
`;
// CHANGE IMAGES BACT TO THIS DURING DEMO RECORDING
// image.sizes.thumbnail.url
const DayPlan = ({
  country, planner,
}) => (
  <div>
    {!!planner.days.length && <CallToFocus>Blogger Generated Itinerary</CallToFocus>}
    {planner.days.map((day, i) => (
      <div>
        <Collapsable header={`day ${i + 1}`}>
          {day.itinerary_items.map(item => (
            <div>
              <Collapsable header={item.title.replace('plan', 'plan(s)') || ''} HeaderComponent={styled.h5`font-weight: 100;`}>
                <Box my="1rem">
                  <span>{item.description}</span>
                </Box>
                <SwipeSlider>
                  {item.poi.images.map(image => (
                    <POIImage src={image.sizes.medium.url} alt={item.title + item.description} />
								))}
                </SwipeSlider>
                <MapContainer>
                  <Map
                    center={{ lat: item.poi.coordinates.latitude, lng: item.poi.coordinates.longitude }}
                    zoom={15}
                  />
                </MapContainer>
              </Collapsable>
            </div>
				))}
        </Collapsable>
      </div>
		))}
  </div>
);

export default enhance(DayPlan);
