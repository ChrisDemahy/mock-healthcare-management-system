import React from "react";

const parseISOString = (s) => {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

const useTimeUntil = (s) => {
  // Utility to add leading zero
  function z(n) {
    return (n < 10 ? "0" : "") + n;
  }

  // Convert string to date object
  var d = parseISOString(s);
  // Find difference between times
  var diff = d - new Date();

  // Allow for previous times
  var sign = diff < 0 ? "-" : "";
  diff = Math.abs(diff);

  // Get time components
  var hours = (diff / 3.6e6) | 0;
  var mins = ((diff % 3.6e6) / 6e4) | 0;
  var secs = Math.round((diff % 6e4) / 1e3);

  // Return formatted string
  return sign + z(hours) + "hrs " + z(mins) + "mins ";
};

export default useTimeUntil;
