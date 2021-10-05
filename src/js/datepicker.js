$(function() {

  pt_br = Datepicker.locales['pt-BR'] = {
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: "Hoje",
    monthsTitle: "Meses",
    clear: "Limpar",
    format: "dd/mm/yyyy"
  };

  Object.assign(Datepicker.locales, pt_br);

  var $els = $('[role="daterange"]')
  for (var i = 0; i < $els.length; i++) {
    var $el = $els[i];
    var rangepicker = new DateRangePicker($el, {
      language: 'pt-BR',
      format: 'dd/mm/yyyy'
    });
  }

});