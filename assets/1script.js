$(function() {
	/* Color chooser modal windows generation */
		var code2colorCeiling = {
			'L_100': 'bbd5e2',
			'L_102': 'bacbe5',
			'L_104': '73b0cd',
			'L_108': '3799c0',
			'L_110': 'accee7',
			'L_114': '0296d4',
			'L_120': '248dad',
			'L_140': '0a66b9',
			'L_156': '0047c3',
			'L_160': '000dab',
			'L_162': '08368b',
			'L_180': '0d387d',
			'L_184': '1f3a58',
			'L_201': 'b8cbec',
			'L_205': '788ab2',
			'L_215': 'd53f7f',
			'L_223': '867bca',
			'L_225': 'ab94e2',
			'L_227': 'a459ac',
			'L_229': '9963b9',
			'L_231': '813573',
			'L_233': '3b3477',
			'L_235': '700547',
			'L_303': 'ffffff',
			'L_305': 'f1f1f1',
			'L_307': 'f3d7b9',
			'L_309': 'c8c9c3',
			'L_311': 'c9cac4',
			'L_313': '92a8b6',
			'L_315': '4b6974',
			'L_317': 'a2a7a1',
			'L_319': '74878e',
			'L_333': '53666c',
			'L_347': '0a0e0f',
			'L_402': 'f38fb1',
			'L_404': 'f1d5ca',
			'L_406': 'dfa782',
			'L_408': 'd77e78',
			'L_410': 'b85d4b',
			'L_412': 'feb6b7',
			'L_416': 'd17d8d',
			'L_420': 'e90913',
			'L_424': 'ff9d26',
			'L_436': 'ff188a',
			'L_442': 'f826a1',
			'L_444': 'd40975',
			'L_462': 'd60838',
			'L_466': 'd60838',
			'L_474': 'a82159',
			'L_476': '9a1737',
			'L_478': '650008',
			'L_490': '330007',
			'L_501': 'ffeed4',
			'L_507': 'fff8dc',
			'L_511': 'f1d1b0',
			'L_515': 'f3e696',
			'L_519': '814531',
			'L_525': '894b2c',
			'L_545': 'a56b22',
			'L_547': 'ae5747',
			'L_555': 'ae5747',
			'L_571': '291300',
			'L_573': 'a94a29',
			'L_577': '1c0e00',
			'L_602': 'e9f8e6',
			'L_400': 'f5ece3',
			'L_604': 'dcfafa',
			'L_608': 'b5e6d2',
			'L_610': '6ea295',
			'L_614': 'a5ac80',
			'L_624': 'bfb55e',
			'L_628': '6abeac',
			'L_630': '038567',
			'L_632': '23a0ac',
			'L_634': '024959',
			'L_636': '00867e',
			'L_638': '5b6342',
			'L_640': '739e59',
			'L_644': '70b73c',
			'L_652': 'accd47',
			'L_662': '018c62',
			'L_664': 'dba647',
			'L_666': '2a912f',
			'L_674': '077a53',
			'L_682': '2b7470',
			'L_707': 'f6d560',
			'L_713': 'f7f462',
			'L_717': 'f0df2b',
			'L_721': 'faf28b',
			'L_733': 'ffc52a',
			'L_737': 'c58e00',
			'L_739': 'ff5400',
			'L_743': 'c47f00',
			'L_751': 'd36101',
			'L_753': 'ff892f',
			'L_866': 'c30000'
		};
		var code2colorImg = code2colorCeiling;
		var defaultColorCodeCeiling = 'L_315';
		var defaultColorCodeImg = 'L_666';

		function generateColorChooserContainer(inputsName, code2color, defaultColorCode) {
			return $('<div/>')
				.addClass('calc_colorChooserContainer')
				.append([
					$('<div/>')
						.addClass('calc_colorChooserBtns')
						.append($.map(code2color, function(color, colorCode) {
							return $('<label/>')
								.attr('title', colorCode)
								.css('background-color', '#' + color)
								.append($('<input type="radio">').attr({
									'name': inputsName,
									'value': colorCode,
									'checked': (colorCode == defaultColorCode)
								}))
						}))
						.on('change', 'input', function() {
							var colorChooserContainer = $(this).closest('.calc_colorChooserContainer');
							colorChooserContainer.find('.calc_colorChooserBtnActive').removeClass('calc_colorChooserBtnActive');
							$(this).closest('label').addClass('calc_colorChooserBtnActive');
							colorChooserContainer.find('.calc_colorChooserStatusText').text('Выбран цвет ' + $(this).val())
							colorChooserContainer.find('.calc_colorChooserStatusBtn').css('background-color', $(this).closest('label').css('background-color'));
						}),
					$('<div/>')
						.addClass('calc_colorChooserStatusContainer')
						.append([
							$('<div/>').addClass('calc_colorChooserStatusText'),
							$('<div/>').addClass('calc_colorChooserStatusBtn')
						])
				]);
		}
		function createModalWindow(id, title, content) {
			var modalWrapper = $('.calc_modalWrapper');
			if (modalWrapper.length == 0) {
				modalWrapper = $('<div/>').addClass('calc_modalWrapper').appendTo($('body'));
			} else {
				modalWrapper = modalWrapper.first();
			}
			$('<div/>')
				.attr('id', id)
				.addClass('calc_modalContainer calc_modalContainerHidden')
				.append([
					$('<div/>')
						.addClass('calc_modalHeader')
						.append([
							$('<div/>')
								.addClass('calc_modalTitle')
								.text(title),
							$('<button/>')
								.addClass('calc_modalCloseBtn')
								.attr('type', 'button')
						]),
					$('<div/>')
						.addClass('calc_modalContentWrapper')
						.append(
							$('<div/>')
								.addClass('calc_modalContent')
								.append(content)
						)
				])
				.appendTo(modalWrapper);
		}
		createModalWindow(
			'calc_modalCeilingColor',
			'Нажмите чтобы изменить цвет потолка',
			generateColorChooserContainer('ceiling_color', code2colorCeiling, defaultColorCodeCeiling)
		);
		createModalWindow(
			'calc_modalImgColor',
			'Нажмите чтобы изменить цвет рисунка',
			generateColorChooserContainer('img_color', code2colorImg, defaultColorCodeImg)
		);
		$('body')
			.on('click', '[data-calc-modal-window-id]', function() {
				$('#' + $(this).attr('data-calc-modal-window-id')).removeClass('calc_modalContainerHidden');
				$('body').addClass('calc_modalDisplayWrapper');
			})
			.on('click', '.calc_modalCloseBtn', function() {
				$(this)
					.closest('.calc_modalContainer')
					.addClass('calc_modalContainerHidden')
					.closest('.calc_modalDisplayWrapper')
					.removeClass('calc_modalDisplayWrapper');
			});
	/* Shapes slider generation */
	function removeCharacter(str) {

		originalString = str;

		newString = originalString.replace('-', '');



		return  newString;

	}
		var code2img = {
			'A-001': '001.jpg',
			'A-002': '002.jpg',
			'A-003': '003.jpg',
			'A-004': '004.jpg',
			'A-005': '005.jpg',
			'A-006': '006.jpg',
			'A-007': '007.jpg',
			'A-008': '008.jpg',
			'A-009': '009.jpg',
			'A-010': '010.jpg',
			'A-011': '011.jpg',
			'A-019': '019.jpg',
			'A-020': '020.jpg',
			'A-021': '021.jpg',
			'A-022': '022.jpg',
			'A-023': '023.jpg',
			'A-024': '024.jpg',
			'A-025': '025.jpg',
			'A-026': '026.jpg',
			'A-027': '027.jpg',
			'A-028': '028.jpg',
			'A-029': '029.jpg',
			'A-030': '030.jpg',
			'A-031': '031.jpg',
			'A-032': '032.jpg',
			'A-033': '033.jpg',
			'A-034': '034.jpg',
			'A-035': '035.jpg',
			'A-036': '036.jpg',
			'A-037': '037.jpg',
			'A-038': '038.jpg',
			'A-039': '039.jpg',
			'A-040': '040.jpg',
			'A-041': '041.jpg',
			'A-042': '042.jpg',
			'A-043': '043.jpg',
			'A-044': '044.jpg',
			'A-045': '045.jpg',
			'A-046': '046.jpg',
			'A-047': '047.jpg',
			'A-048': '048.jpg',
			'A-049': '049.jpg',
			'A-050': '050.jpg',
			'A-051': '051.jpg',
			'A-052': '052.jpg',
			'A-053': '053.jpg',
			'A-054': '054.jpg',
			'A-056': '056.jpg',
			'A-057': '057.jpg',
			'A-058': '058.jpg',
			'A-059': '059.jpg',
			'A-060': '060.jpg',
			'A-061': '061.jpg',
			'A-062': '062.jpg',
			'A-063': '063.jpg',
			'A-064': '064.jpg',
			'A-065': '065.jpg',
			'A-066': '066.jpg',
			'A-067': '067.jpg',
			'A-068': '068.jpg',
			'A-069': '069.jpg',
			'A-070': '070.jpg',
			'A-071': '071.jpg',
			'A-072': '072.jpg',
			'A-073': '073.jpg',
			'A-074': '074.jpg',
			'A-075': '075.jpg',
			'A-076': '076.jpg',
			'A-077': '077.jpg',
			'A-078': '078.jpg',
			'A-079': '079.jpg',
			'A-080': '080.jpg',
			'A-081': '081.jpg',
			'A-082': '082.jpg',
			'A-083': '083.jpg',
			'A-084': '084.jpg',
			'A-085': '085.jpg',
			'A-086': '086.jpg',
			'A-087': '087.jpg',
			'A-088': '088.jpg',
			'A-089': '089.jpg',
			'A-090': '090.jpg',
			'A-091': '091.jpg',
			'A-092': '092.jpg',
			'A-093': '093.jpg',
			'A-094': '094.jpg',
			'A-095': '095.jpg',
			'A-096': '096.jpg',
			'A-097': '097.jpg',
			'A-098': '098.jpg',
			'A-099': '099.jpg',
			'A-100': '100.jpg',
			'A-101': '101.jpg',
			'A-102': '102.jpg',
			'A-103': '103.jpg',
			'A-104': '104.jpg',
			'A-105': '105.jpg',
			'A-106': '106.jpg',
			'A-107': '107.jpg',
			'A-108': '108.jpg',
			'A-109': '109.jpg',
			'A-110': '110.jpg',
			'A-111': '111.jpg',
			'A-112': '112.jpg',
			'A-113': '113.jpg',
			'A-114': '114.jpg',
			'A-115': '115.jpg',
			'A-116': '116.jpg',
			'A-117': '117.jpg',
			'A-118': '118.jpg',
			'A-119': '119.jpg',
			'A-120': '120.jpg',
			'A-121': '121.jpg',
			'A-122': '122.jpg',
			'A-123': '123.jpg',
			'A-124': '124.jpg',
			'A-125': '125.jpg',
			'A-126': '126.jpg',
			'A-127': '127.jpg',
			'A-128': '128.jpg',
			'A-129': '129.jpg',
			'A-130': '130.jpg',
			'A-131': '131.jpg',
			'A-132': '132.jpg',
			'A-133': '133.jpg',
			'A-134': '134.jpg',
			'A-135': '135.jpg',
			'A-136': '136.jpg',
			'A-137': '137.jpg',
			'A-138': '138.jpg',
			'A-139': '139.jpg',
			'A-141': '141.jpg',
			'A-142': '142.jpg',
			'A-143': '143.jpg',
			'A-144': '144.jpg',
			'A-145': '145.jpg',
			'A-146': '146.jpg',
			'A-147': '147.jpg',
			'A-148': '148.jpg',
			'A-149': '149.jpg',
			'A-150': '150.jpg',
			'A-151': '151.jpg',
			'A-152': '152.jpg',
			'A-153': '153.jpg',
			'A-154': '154.jpg', 
			'A-155': '155.jpg',
			'A-156': '156.jpg'
		};
		var oneVar = { // e
			'A-001': '2',
			'A-002': '3',
			'A-003': '4'
		};
		var twoVar = { // c
			'A-001': '12',
			'A-002': '13',
			'A-003': '14'
		};

		//
		var defaultImgCode = 'A-001';

		var i = 0;
		$('.calc_sliderTrack')

			.append($.map(code2img, function(img, imgCode) {

				return $('<label/>')
					.on('click', function () {
						//console.log(twoVar[imgCode])

					})
					.addClass('calc_sliderSlide')
					.append([
						$('<input/>').attr({'type': 'radio', 'name': 'ceiling_img', 'value': imgCode, 'checked': (imgCode == defaultImgCode)}),
						$('<img/>').attr('src', 'img/thumb/' + img),
						$('<div/>').text(imgCode)
					]);
			i++;
			}))
			.data('sliderObject', new Siema({
				selector: '.calc_sliderTrack',
				duration: 200,
				easing: 'ease-out',
				perPage: {
					'0': 3,
					'320': 4,
					'576': 6,
					'768': 8,
					'992': 10,
					'1200': 12,
					'1440': 10
				},
				startIndex: 0,
				draggable: true,
				multipleDrag: true,
				threshold: 20,
				loop: false,
				rtl: false
			}));
		$('.calc_sliderPrevBtn').on('click', function() {
			$('.calc_sliderTrack').data('sliderObject').prev();
		});
		$('.calc_sliderNextBtn').on('click', function() {
			$('.calc_sliderTrack').data('sliderObject').next();
		});
		$('.calc_sliderTrack input').on('change', function() {
			var currentSlide = $(this).closest('.calc_sliderSlide');
			if (!currentSlide.is('.calc_sliderSlideActive')) {
				currentSlide
					.addClass('calc_sliderSlideActive')
					.closest('.calc_sliderTrack')
					.find('.calc_sliderSlideActive').not(currentSlide)
					.removeClass('calc_sliderSlideActive');
			}
		}).first().trigger('change');
	/* Input masks */
		$('.calc_inputsInput').inputmask('decimal', {
			'placeholder': '0,00',
			'positionCaretOnClick': 'ignore',
			'radixPoint': ',',
			'integerDigits': '3',
			'digits': 2,
			'digitsOptional': false,
			'autoUnmask': true,
			'rightAlign': false
		});
		$('.calc_searchCardInput').inputmask('999', {
			'placeholder': '0',
			'showMaskOnHover': false,
			'numericInput': true,
			'autoUnmask': true
		});
	/* Additional events */
	var dl;
	var var_e;
		$(document)

			.on('change', 'input[name="ceiling_img"]', function() {

				var swapObject = $('.calc_renderMask').clone(true);

				$('.calc_renderMask').before(swapObject).remove();
				swapObject.attr('data', $(this).closest('label').find('img').attr('src').replace('/thumb/', '/render/').replace(/\.[a-z]+$/i, '.svg'));
				var eto = $(this).val();

				$('.calc_inputsInput[name="cut_length"]').val(twoVar[eto]);

				 dl = $('.calc_inputsInput[name="img_length"]').val();
				 var_e = oneVar[eto];

				$('.calc_inputsInput[name="img_width"]').val(parseFloat(var_e)*parseFloat(dl));
				console.log(parseFloat(var_e)*parseFloat(dl))
				$('.calc_inputsInput').trigger('input');
				console.log(twoVar[eto])
			})
			.on('change', 'input[name="ceiling_color"], input[name="img_color"]', function() {
				var svgSelector = 'g:eq(1) path';
				var buttonSelector = '.calc_renderCeilingBtn';
				if ($(this).attr('name') == 'img_color') {
					svgSelector = '.st0';
					buttonSelector = '.calc_renderImgBtn';
				}
				$(buttonSelector).css('background-color', $(this).closest('label').css('background-color'));
				$(svgSelector, $('.calc_renderMask')[0].contentDocument).attr('fill', $(this).closest('label').css('background-color'));
			})
			.on('input', '.calc_searchCardInput', function() {
				$('input[name="ceiling_img"][value="A-' + ('000' + $(this).val()).slice(-3) + '"]').prop('checked', true).trigger('change');
				$('.calc_sliderTrack').data('sliderObject').goTo($('.calc_sliderSlideActive').closest('div').index());
			})
			.on('input', '.calc_inputsInput', function() {
				var img_length = ($('.calc_inputsInput[name="img_length"]').val().replace(',', '.') * 1);
				var price_cena = ($('.calc_inputsInput[name="price_cena"]').val().replace(',', '.') * 1);
				var cut_length = ($('.calc_inputsInput[name="cut_length"]').val().replace(',', '.') * 1);


				if(img_length === 0) {img_length = 1;}
				if(price_cena === 0) {price_cena = 1;}
				if(cut_length === 0) {cut_length = 1;}
				//var dl = $('.calc_inputsInput[name="img_length"]').val();
				$('.calc_inputsInput[name="img_width"]').val(parseFloat(img_length)*parseFloat(var_e));

				$('.calc_resultSum').text(Math.ceil(
						img_length*
						price_cena*
						cut_length
				));
			});
		$('.calc_inputsInput').trigger('input');
		$('.calc_renderMask').on('load', function() {
			$('style', $(this)[0].contentDocument).remove();
			$('input[name="ceiling_color"]:checked, input[name="img_color"]:checked').trigger('change');
		});
		$('.calc_subscribeFormInput').inputmask('*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]', {
			'placeholder': '___',
			'showMaskOnHover': false,
			'greedy': false,
			'onBeforePaste': function (pastedValue, opts) {
				pastedValue = pastedValue.toLowerCase();
				return pastedValue.replace("mailto:", "");
			},
			'definitions': {
				'*': {
					validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
					casing: "lower"
				}
			}
		});
});
