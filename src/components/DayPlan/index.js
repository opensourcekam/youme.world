
import React from 'react';
import { withState, compose, lifecycle, withHandlers } from 'recompose';
import { Flex, Box } from 'grid-styled';
import moment from 'moment';
import styled from 'styled-components';
import tempImage from '../../images/outdoors.jpg';
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

const DayNumber = styled.h2``;
const POIImage = styled.img`
	max-height: 300px;
`;

// CHANGE IMAGES BACT TO THIS DURING DEMO RECORDING
// image.sizes.thumbnail.url
const DayPlan = ({
  country, planner,
}) => (
  <div>
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
										// image.sizes.medium.url
                    <POIImage src={tempImage} alt={item.title + item.description} />
								))}
                </SwipeSlider>
              </Collapsable>
            </div>
				))}
        </Collapsable>
      </div>
		))}
  </div>
);

export default enhance(DayPlan);
