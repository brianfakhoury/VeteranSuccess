import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';
import shortid from 'shortid';

SimpleRest.setMethodOptions('restUserSignup', {
  url: "api/v1/user-signup/:0/:1/:2",
  httpMethod: "post"
});

SimpleRest.setMethodOptions('getHomeStats', {
  url: "api/v1/home-stats/:0/:1/",
  httpMethod: "get"
});

SimpleRest.setMethodOptions('getVehicleStats', {
  url: "api/v1/vehicle-stats/:0",
  httpMethod: "get"
});

SimpleRest.setMethodOptions('getTicketmasterResults', {
  url: "api/v1/ticketmaster-results/:0",
  httpMethod: "get"
});

SimpleRest.setMethodOptions('getGyphyImage', {
  url: "api/v1/gyphy-images/:0",
  httpMethod: "get"
});

SimpleRest.setMethodOptions('getSeatgeekResults', {
  url: "api/v1/seatgeek-results/:0/:1",
  httpMethod: "get"
});

Meteor.methods({
  restUserSignup(name, email, password) {
    new SimpleSchema({
      name: {
        type: String
      },
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      },
      password: {
        type: String
      }
    }).validate({name, email, password});

    const profile = {
      name
    };
    try {
      Accounts.createUser({email, password, profile});
      return true;
    } catch (err) {
      console.log('restUserSignup err: ', err);
      return false;
    }
  },
  restUserLogin(email, password) {
    new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      },
      password: {
        type: String
      }
    }).validate({email, password});

    const user = Accounts.findUserByEmail(email);
    if (user) {

    } else {

    }
  },
  getHomeStats(lat, lon) {
    new SimpleSchema({
      lat: {
        type: String
      },
      lon: {
        type: String
      }
    }).validate({lat, lon});

    if (Meteor.isServer) {
      const apikey = Meteor.settings.private.SHINE_HOME_KEY;
      const url = `https://apis.solarialabs.com/shine/v1/total-home-scores/reports`;
      const options = {
        params: {
          apikey,
          lat,
          lon
        },
        timeout: 30000
      };
      this.unblock();
      try {
        // Synchronous GET Request
        const result = HTTP.get(url, options);
        // console.log('getHomeStats result: ', result);
        if (result.statusCode === 200) {
          const responseJson = JSON.parse(result.content);
          // console.log('responseJson:', responseJson);
          return responseJson.totalHomeScores;
        } else {
          // console.log("Response issue: ", result.statusCode);
          const errorJson = JSON.parse(result.content);
          throw new Meteor.Error(result.statusCode, errorJson.error);
        }
      } catch (error) {
        console.log('getHomeStats: error', error);
      }
    }
  },
  getVehicleStats(best) {
    new SimpleSchema({
      best: {
        type: String
      },
    }).validate({best});

    if (Meteor.isServer) {
      const apikey = Meteor.settings.private.SHINE_VEHICLE_KEY;
      const url = `https://apis.solarialabs.com/shine/v1/vehicle-stats/five-year-costs`;
      const options = {
        params: {
          apikey
        },
        timeout: 30000
      };
      this.unblock();
      try {
        // Synchronous GET Request
        const result = HTTP.get(url, options);
        // console.log('getHomeStats result: ', result);
        if (result.statusCode === 200) {
          const responseJson = JSON.parse(result.content);
          // console.log('responseJson:', responseJson);
          return responseJson;
        } else {
          // console.log("Response issue: ", result.statusCode);
          const errorJson = JSON.parse(result.content);
          throw new Meteor.Error(result.statusCode, errorJson.error);
        }
      } catch (error) {
        console.log('getHomeStats: error', error);
      }
    }
  },
  getTicketmasterResults(city) {
    new SimpleSchema({
      city: {
        type: String
      }
    }).validate({city});

    if (Meteor.isServer) {
      const apikey = Meteor.settings.private.TICKETMASTER_KEY;
      const url = `https://app.ticketmaster.com/discovery/v2/events.json`;
      const options = {
        params: {
          apikey,
          city,
          size: 20,
          sort: 'date,desc',
        },
        timeout: 30000
      };
      this.unblock();
      try {
        // Synchronous GET Request
        const result = HTTP.get(url, options);
        // console.log('getYelpData result: ', result);
        if (result.statusCode === 200) {
          const responseJson = JSON.parse(result.content);
          // console.log('responseJson:', responseJson);
          return responseJson._embedded.events;
        } else {
          // console.log("Response issue: ", result.statusCode);
          const errorJson = JSON.parse(result.content);
          throw new Meteor.Error(result.statusCode, errorJson.error);
        }
      } catch (error) {
        console.log('getYelpData: error', error);
      }
    }
  },
  getGyphyImage(word) {
    new SimpleSchema({
      word: {
        type: String
      }
    }).validate({word});

    if (Meteor.isServer) {
      const apikey = Meteor.settings.private.GIPHY_KEY;
      const url = `http://api.giphy.com/v1/gifs/translate`;
      const options = {
        params: {
          api_key: apikey,
          s: word,
          weirdness: 1,
        },
        timeout: 30000
      };
      this.unblock();
      try {
        // Synchronous GET Request
        const result = HTTP.get(url, options);
        // console.log('getYelpData result: ', result);
        if (result.statusCode === 200) {
          const responseJson = JSON.parse(result.content);
          // console.log('responseJson:', responseJson);
          console.log('Success: ', responseJson.data.images.original.url);
          return responseJson.data.images.original.url;
        } else {
          // console.log("Response issue: ", result.statusCode);
          const errorJson = JSON.parse(result.content);
          console.log('Failed: ', result.statusCode);
          // throw new Meteor.Error(result.statusCode, errorJson.error);
        }
      } catch (error) {
        console.log('getYelpData: error', error);
      }
    }
  },
  getSeatgeekResults(city, query) {
    new SimpleSchema({
      city: {
        type: String
      },
      query: {
        type: String
      }
    }).validate({city, query});

    if (Meteor.isServer) {
      const apikey = Meteor.settings.private.SEATGEEK_KEY;
      const client_secret = Meteor.settings.private.SEATGEEK_SECRET;
      const url = `https://api.seatgeek.com/2/events`;
      const options = {
        params: {
          q: "sports",
          'venue.city': "Boston",
          client_id: apikey,
          client_secret
        },
        timeout: 30000
      };
      this.unblock();
      try {
        // Synchronous GET Request
        const result = HTTP.get(url, options);
        // console.log('getSeatgeekResults result: ', result);
        if (result.statusCode === 200) {
          const responseJson = JSON.parse(result.content);
          // console.log('responseJson:', responseJson);
          return responseJson.events;
        } else {
          // console.log("Response issue: ", result.statusCode);
          const errorJson = JSON.parse(result.content);
          throw new Meteor.Error(result.statusCode, errorJson.error);
        }
      } catch (error) {
        console.log('getSeatgeekResults: error', error);
      }
    }
  }
});
