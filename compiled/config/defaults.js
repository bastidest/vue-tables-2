"use strict";

module.exports = function () {
  return {
    dateColumns: [],
    listColumns: {},
    datepickerOptions: {
      locale: {
        cancelLabel: 'Clear'
      }
    },
    initialPage: 1,
    perPage: 10,
    perPageValues: [10, 25, 50, 100],
    groupBy: false,
    params: {},
    sortable: true,
    filterable: true,
    initFilters: {},
    customFilters: [],
    templates: {},
    debounce: 250,
    dateFormat: "DD/MM/YYYY",
    toMomentFormat: false,
    skin: false,
    columnsDisplay: {},
    columnsDropdown: false,
    texts: {
      count: "Zeige Eintrag {from} bis {to} von {count}|{count} Einträge|Ein Eintrag",
      filter: "Filter:",
      filterPlaceholder: "Suche",
      limit: "Einträge pro Seite:",
      page: "Seite:",
      noResults: "Keinen Eintrag gefunden",
      filterBy: "Filtern nach {column}",
      loading: 'Lade...',
      defaultOption: 'Select {column}',
      columns: 'Spalten'
    },
    sortIcon: {
      is: 'glyphicon-sort',
      base: 'glyphicon',
      up: 'glyphicon-chevron-up',
      down: 'glyphicon-chevron-down'
    },
    sortingAlgorithm: function sortingAlgorithm(data, column) {
      return data.sort(this.getSortFn(column));
    },

    customSorting: {},
    multiSorting: {},
    clientMultiSorting: true,
    serverMultiSorting: false,
    filterByColumn: false,
    highlightMatches: false,
    orderBy: false,
    footerHeadings: false,
    headings: {},
    headingsTooltips: {},
    pagination: {
      dropdown: false,
      chunk: 10,
      align: 'center'
    },
    childRow: false,
    childRowTransition: null,
    childRowTogglerFirst: true,
    evenOddClasses: true,
    uniqueKey: 'id',
    requestFunction: false,
    requestAdapter: function requestAdapter(data) {
      return data;
    },
    responseAdapter: function responseAdapter(resp) {

      var data = this.getResponseData(resp);

      return {
        data: data.data,
        count: data.count
      };
    },
    requestKeys: {
      query: 'query',
      limit: 'limit',
      orderBy: 'orderBy',
      ascending: 'ascending',
      page: 'page',
      byColumn: 'byColumn'
    },
    rowClassCallback: false,
    preserveState: false,
    saveState: false,
    storage: 'local',
    columnsClasses: {}
  };
};