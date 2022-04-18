(function() {
  var LOCALE = {
      'format': 'DD/MM/YYYY',
      'separator': ' - ',
      'applyLabel': 'Aplicar',
      'cancelLabel': 'Cancelar',
      'fromLabel': 'De',
      'toLabel': 'Até',
      'customRangeLabel': 'Entre as datas',
      'weekLabel': 'Semana',
      'daysOfWeek': [
          'D',
          'S',
          'T',
          'Q',
          'Q',
          'S',
          'S'
      ],
      'monthNames': [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
      ],
      'firstDay': 0
  };

  var getRangeValuesInThePast = function() {
      var today = moment(),
          yesterday = moment().subtract(1, 'days'),
          oneMonthAgo = function() {
              return moment().subtract(1, 'month')
          };

      return {
          today: [today, today],
          yesterday: [yesterday, yesterday],
          last3Days: [moment().subtract(3, 'days'), today],
          last7Days: [moment().subtract(7, 'days'), today],
          last30Days: [moment().subtract(30, 'days'), today],
          thisMonth: [moment().startOf('month'), moment().endOf('month')],
          lastMonth: [oneMonthAgo().startOf('month'), oneMonthAgo().endOf('month')]
      }
  };

  var getRangeValuesInTheFuture = function() {
      var today = moment(),
          tomorrow = moment().add(1, 'days'),
          oneMonthFromNow = function() {
              return moment().add(1, 'month')
          };

      return {
          tomorrow: [tomorrow, tomorrow],
          next7Days: [today, moment().add(7, 'days')],
          next30Days: [today, moment().add(30, 'days')],
          thisMonth: [today, moment().endOf('month')],
          nextMonth: [oneMonthFromNow().startOf('month'), oneMonthFromNow().endOf('month')]
      }
  };

  var getRangesInThePast = function(values) {
      return {
          'Hoje': values.today,
          'Ontem': values.yesterday,
          'Últimos 3 dias': values.last3Days,
          'Últimos 7 dias': values.last7Days,
          'Últimos 30 dias': values.last30Days,
          'Esse mês': values.thisMonth,
          'Último mês': values.lastMonth
      }
  };

  var getRangesInTheFuture = function(values) {
      return {
          'Amanhã': values.tomorrow,
          'Próximos 7 dias': values.next7Days,
          'Próximos 30 dias': values.next30Days,
          'Esse mês': values.thisMonth,
          'Próximo mês': values.nextMonth
      }
  };

  var getRanges = function(defaultValue) {
      if (defaultValue === 'next-7-days') {
          var values = getRangeValuesInTheFuture();

          return {
              all: getRangesInTheFuture(values),
              default: values.next7Days,
              future: false
          }
      } else {
          var values = getRangeValuesInThePast();

          if (defaultValue === 'last-7-days') {
              return {
                  all: getRangesInThePast(values),
                  default: values.last7Days,
                  future: false
              }
          } else if (defaultValue === 'last-3-days') {
              return {
                  all: getRangesInThePast(values),
                  default: values.last3Days,
                  future: false
              }
          } else {
              return {
                  all: getRangesInThePast(values),
                  default: values.last30Days,
                  future: false
              }
          }
      }
  };

  var getFormatter = function(format) {
      return function(momentVal) {
          return momentVal.format(format);
      }
  };

  $(function() {
      var $behavior = $('[data-behavior="daterangepicker"]');

      if (!$behavior.length) return;

      var format = getFormatter(LOCALE.format);

      $behavior.each(function() {
          var $this = $(this);
          var range = getRanges($this.data('defaultValue'));

          $this.daterangepicker(
              $.extend({
                  'alwaysShowCalendars': true,
                  'ranges': range.all,
                  'locale': LOCALE,
                  'startDate': $this.data('startDate') || format(range.default[0]),
                  'endDate': $this.data('endDate') || format(range.default[1])
              }, range.future ? {
                  'minDate': format(moment())
              } : {})
          );

          $this.on('apply.daterangepicker', function(evt, picker) {
              var $target = $(evt.target);
              var dateRange = format(picker.startDate) + '..' + format(picker.endDate);
              var behaviorParentToTrigger = $target.attr('data-behavior-parent-to-trigger');

              if (behaviorParentToTrigger) {
                  var behaviorTrigger = behaviorParentToTrigger.split('.');
                  var behavior = '[data-behavior="' + behaviorTrigger[0] + '"]';
                  var trigger = behaviorTrigger[1];
                  $target.parents(behavior).trigger(trigger, [dateRange]);
              }
          });
      });
  });
}());


$(function() {
  var $behavior = $('[data-behavior-parent-to-trigger="filterbar.filterBySelect"] a')
  var $parent = $('[data-behavior-parent-to-trigger="filterbar.filterBySelect"]')

  if (!$behavior.length) return;

  var fields = []
  
  $parent.each(function(i, obj) {
      fields.push($(obj).data('field'))
  })

  $behavior.on("click", function() {
      $('[data-behavior="filterbar"]').trigger('filterBySelect', this);
  });

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);

  var selectedItems = [];
  fields.forEach(function(i) {
      var field = urlParams.get(i)
      selectedItems.push([i, field])
  })

  selectedItems.forEach(function(i) {
      var item = i[0]
      var value = i[1]

      if (value != null) {
          var $selectedItemContainer = $('[data-behavior="filterbar"]').find('[data-field="' + item + '"');
          var selectedItem = $selectedItemContainer.find('[data-value="' + value + '"')
          $(selectedItem).addClass('selected')
          var label = $(selectedItem).text()
          var parentEl = $(selectedItem).parent().data('dropdown');
          var $parentEl = $("[data-target='" + parentEl + "']");
          $parentEl.text(label)
      }
  });
});

(function() {

  $(function() {
      var $behavior = $('[data-behavior="filterbar"]');

      if (!$behavior.length) return;

      $behavior.on('filterByDateRange', function(e, dateRange) {

          var url = new URL($behavior.data('currentPath'));

          var dateStart = dateRange.split('..')[0]
          var dateEnd = dateRange.split('..')[1]

          var $params = $("[data-behavior='daterangepicker']");

          url.searchParams.set($params.data('filterStart'), dateStart);
          url.searchParams.set($params.data('filterEnd'), dateEnd);
          window.location.href = url;
      })

      $behavior.on('filterBySelect', function(e, el) {
          var url = new URL($behavior.data('currentPath'));
          var $el = $(el);
          var field = $el.parent().data('field');
          var value = $el.data('value')
          url.searchParams.set(field, value);
          window.location.href = url;
      })
  });
}());

(function() {
  $(function() {

      var $behavior = $('[role="dropdown"]');
      var $dropdownContent = $(".dropdown-content");


      if (!$behavior.length) return;

      $('body').on('click', function(event) {
          if (!$(event.target).is($behavior)) {
              $dropdownContent.hide();
          }
      });

      $behavior.on("click", function() {
          var position = $(this).position();
          var top = position.top + 35;
          var left = position.left;

          var target = $(this).data('target');
          var $target = $("[data-dropdown='" + target + "']");
          $dropdownContent.hide();

          $target.css({
              top: top,
              left: left
          });
          $target.show();
      });

  });
}());