const moment = require('moment');
moment.suppressDeprecationWarnings = true; // REMOVE when we have a solution


module.exports = function (env) {

  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */


  /* ------------------------------------------------------------------
     date filter for use in Nunjucks
     example: {{ params.date | date("DD/MM/YYYY") }}
     outputs: 01/01/1970
   ------------------------------------------------------------------ */
   filters.date = function(timestamp, format) {
    return moment(timestamp).format(format);
  }

  /* ------------------------------------------------------------------
    utility functions for use in mojDate function/filter
  ------------------------------------------------------------------ */
  filters.govDate = function(timestamp) {
    return moment(timestamp).format('D MMMM YYYY');
  }

  filters.govShortDate = function(timestamp) {
    return moment(timestamp).format('D MMM YYYY');
  }

  filters.govTime = function(timestamp) {
    let t = moment(timestamp);
    if(t.minutes() > 0) {
      return t.format('h:mma');
    } else {
      return t.format('ha');
    }
  }


  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
