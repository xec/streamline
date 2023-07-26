<script lang="ts">
	function calc(num: number, factor: number = 1) {
		const calculatedNum = lowIsGood ? num / factor : num * factor;
		return Number(calculatedNum.toFixed(2));
	}

	const itemTypes = [
		{
			name: 'Two-handed weapon',
			factor: 2
		},
		{
			name: 'Amulet',
			factor: 1.5
		},
		{
			name: 'Other',
			factor: 1
		}
	] as const;

	let roll = 50;
	let itemType = itemTypes[2];

	let lowIsGood = false;

	let normalizedRoll: number, amulet: number, twoHand: number;

	$: {
		normalizedRoll = lowIsGood ? roll * itemType.factor : roll / itemType.factor;
		amulet = calc(normalizedRoll, 1.5);
		twoHand = calc(normalizedRoll, 2);
	}
</script>

<svelte:head>
	<title>Diablo 4 relative roll calculator</title>
</svelte:head>

<div class="page">
	<form>
		<div>
			<label for="rollmax">My roll</label>
			<input id="rollmax" type="number" bind:value={roll} />
		</div>
		<div>
			Item type
			{#each itemTypes as t}
				<label>
					<input type="radio" bind:group={itemType} value={t} />
					{t.name}
				</label>
			{/each}
		</div>
		<div>
			<label>
				<input type="checkbox" bind:checked={lowIsGood} />
				Lower rolls are better (increased cooldown, for instance)
			</label>
		</div>
	</form>

	<table>
		<tbody>
			<tr>
				<td>Aspect</td>
				<td>{calc(normalizedRoll)}</td>
			</tr>
			<tr>
				<td>Amulet (50% better)</td>
				<td>{amulet}</td>
			</tr>
			<tr>
				<td>2H weapon (100% better)</td>
				<td>{twoHand}</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="page">
	<h2>Nightmare dungeon tier monster level chart</h2>
	<div class="tables">
		<table>
			<tbody>
				<tr>
					<td style="text-align: center;" colspan="2"><strong>World Tier 3</strong></td>
				</tr>
				<tr>
					<td><strong>Tier</strong></td>
					<td><strong>Monster Level</strong></td>
				</tr>
				<tr>
					<td>1</td>
					<td>54</td>
				</tr>
				<tr>
					<td>2</td>
					<td>55</td>
				</tr>
				<tr>
					<td>3</td>
					<td>56</td>
				</tr>
				<tr>
					<td>4</td>
					<td>57</td>
				</tr>
				<tr>
					<td>5</td>
					<td>58</td>
				</tr>
				<tr>
					<td>6</td>
					<td>59</td>
				</tr>
				<tr>
					<td>7</td>
					<td>60</td>
				</tr>
				<tr>
					<td>8</td>
					<td>61</td>
				</tr>
				<tr>
					<td>9</td>
					<td>62</td>
				</tr>
				<tr>
					<td>10</td>
					<td>63</td>
				</tr>
				<tr>
					<td>11</td>
					<td>64</td>
				</tr>
				<tr>
					<td>12</td>
					<td>65</td>
				</tr>
				<tr>
					<td>13</td>
					<td>66</td>
				</tr>
				<tr>
					<td>14</td>
					<td>67</td>
				</tr>
				<tr>
					<td>15</td>
					<td>68</td>
				</tr>
				<tr>
					<td>16</td>
					<td>69</td>
				</tr>
				<tr>
					<td>17</td>
					<td>70</td>
				</tr>
				<tr>
					<td>18</td>
					<td>71</td>
				</tr>
				<tr>
					<td>19</td>
					<td>72</td>
				</tr>
				<tr>
					<td>20</td>
					<td>73</td>
				</tr>
			</tbody>
		</table>
		<table>
			<tbody>
				<tr>
					<td style="text-align: center;" colspan="2"><strong>World Tier 4</strong></td>
				</tr>
				<tr>
					<td><strong>Tier</strong></td>
					<td><strong>Monster Level</strong></td>
				</tr>
				<tr>
					<td>21</td>
					<td>75</td>
				</tr>
				<tr>
					<td>22</td>
					<td>76</td>
				</tr>
				<tr>
					<td>23</td>
					<td>77</td>
				</tr>
				<tr>
					<td>24</td>
					<td>78</td>
				</tr>
				<tr>
					<td>25</td>
					<td>79</td>
				</tr>
				<tr>
					<td>26</td>
					<td>80</td>
				</tr>
				<tr>
					<td>27</td>
					<td>81</td>
				</tr>
				<tr>
					<td>28</td>
					<td>82</td>
				</tr>
				<tr>
					<td>29</td>
					<td>83</td>
				</tr>
				<tr>
					<td>30</td>
					<td>84</td>
				</tr>
				<tr>
					<td>31</td>
					<td>85</td>
				</tr>
				<tr>
					<td>32</td>
					<td>86</td>
				</tr>
				<tr>
					<td>33</td>
					<td>87</td>
				</tr>
				<tr>
					<td>34</td>
					<td>88</td>
				</tr>
				<tr>
					<td>35</td>
					<td>89</td>
				</tr>
				<tr>
					<td>36</td>
					<td>90</td>
				</tr>
				<tr>
					<td>37</td>
					<td>91</td>
				</tr>
				<tr>
					<td>38</td>
					<td>92</td>
				</tr>
				<tr>
					<td>39</td>
					<td>93</td>
				</tr>
				<tr>
					<td>40</td>
					<td>94</td>
				</tr>
				<tr>
					<td>41</td>
					<td>95</td>
				</tr>
				<tr>
					<td>42</td>
					<td>96</td>
				</tr>
				<tr>
					<td>43</td>
					<td>97</td>
				</tr>
				<tr>
					<td>44</td>
					<td>98</td>
				</tr>
				<tr>
					<td>45</td>
					<td>99</td>
				</tr>
				<tr>
					<td>46</td>
					<td>100</td>
				</tr>
				<tr>
					<td>47</td>
					<td>101</td>
				</tr>
				<tr>
					<td>48</td>
					<td>102</td>
				</tr>
				<tr>
					<td>49</td>
					<td>103</td>
				</tr>
				<tr>
					<td>50</td>
					<td>104</td>
				</tr>
				<tr>
					<td>51</td>
					<td>105</td>
				</tr>
				<tr>
					<td>52</td>
					<td>106</td>
				</tr>
				<tr>
					<td>53</td>
					<td>107</td>
				</tr>
				<tr>
					<td>54</td>
					<td>108</td>
				</tr>
				<tr>
					<td>55</td>
					<td>109</td>
				</tr>
				<tr>
					<td>56</td>
					<td>110</td>
				</tr>
				<tr>
					<td>57</td>
					<td>111</td>
				</tr>
				<tr>
					<td>58</td>
					<td>112</td>
				</tr>
				<tr>
					<td>59</td>
					<td>113</td>
				</tr>
				<tr>
					<td>60</td>
					<td>114</td>
				</tr>
				<tr>
					<td>61</td>
					<td>115</td>
				</tr>
				<tr>
					<td>62</td>
					<td>116</td>
				</tr>
				<tr>
					<td>63</td>
					<td>117</td>
				</tr>
				<tr>
					<td>64</td>
					<td>118</td>
				</tr>
				<tr>
					<td>65</td>
					<td>119</td>
				</tr>
				<tr>
					<td>66</td>
					<td>120</td>
				</tr>
				<tr>
					<td>67</td>
					<td>121</td>
				</tr>
				<tr>
					<td>68</td>
					<td>122</td>
				</tr>
				<tr>
					<td>69</td>
					<td>123</td>
				</tr>
				<tr>
					<td>70</td>
					<td>124</td>
				</tr>
				<tr>
					<td>71</td>
					<td>125</td>
				</tr>
				<tr>
					<td>72</td>
					<td>126</td>
				</tr>
				<tr>
					<td>73</td>
					<td>127</td>
				</tr>
				<tr>
					<td>74</td>
					<td>128</td>
				</tr>
				<tr>
					<td>75</td>
					<td>129</td>
				</tr>
				<tr>
					<td>76</td>
					<td>130</td>
				</tr>
				<tr>
					<td>77</td>
					<td>131</td>
				</tr>
				<tr>
					<td>78</td>
					<td>132</td>
				</tr>
				<tr>
					<td>79</td>
					<td>133</td>
				</tr>
				<tr>
					<td>80</td>
					<td>134</td>
				</tr>
				<tr>
					<td>81</td>
					<td>135</td>
				</tr>
				<tr>
					<td>82</td>
					<td>136</td>
				</tr>
				<tr>
					<td>83</td>
					<td>137</td>
				</tr>
				<tr>
					<td>84</td>
					<td>138</td>
				</tr>
				<tr>
					<td>85</td>
					<td>139</td>
				</tr>
				<tr>
					<td>86</td>
					<td>140</td>
				</tr>
				<tr>
					<td>87</td>
					<td>141</td>
				</tr>
				<tr>
					<td>88</td>
					<td>142</td>
				</tr>
				<tr>
					<td>89</td>
					<td>143</td>
				</tr>
				<tr>
					<td>90</td>
					<td>144</td>
				</tr>
				<tr>
					<td>91</td>
					<td>145</td>
				</tr>
				<tr>
					<td>92</td>
					<td>146</td>
				</tr>
				<tr>
					<td>93</td>
					<td>147</td>
				</tr>
				<tr>
					<td>94</td>
					<td>148</td>
				</tr>
				<tr>
					<td>95</td>
					<td>149</td>
				</tr>
				<tr>
					<td>96</td>
					<td>150</td>
				</tr>
				<tr>
					<td>97</td>
					<td>151</td>
				</tr>
				<tr>
					<td>98</td>
					<td>152</td>
				</tr>
				<tr>
					<td>99</td>
					<td>153</td>
				</tr>
				<tr>
					<td>100</td>
					<td>154</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	.tables {
		display: inline-grid;
		grid-auto-flow: column;
		justify-content: start;
		align-items: start;
		gap: 2rem;
	}
	form {
		display: grid;
		gap: 1rem;
	}
	label {
		display: block;
	}
	table {
		margin-top: 1rem;
	}
	td + td {
		font-weight: bold;
		color: var(--bfc-base-fg);
	}
</style>
