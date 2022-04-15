import React from "react";

const Arrowcircle = ({ onClick, disabled }) => {
  const noRefCheck = () => {};
  return (
    <div
      onClick={disabled ? noRefCheck : onClick}
      style={{
        cursor: disabled ? "auto" : "pointer",
      }}
    >
      {disabled === false ? (
        <svg className="Path_19_mh" viewBox="1.999 2 12.001 12">
          <path
            id="Path_19_mh"
            d="M 8 3 C 10.21961116790771 3.000855445861816 12.17296123504639 4.46489143371582 12.7966365814209 6.595078945159912 C 13.42031192779541 8.725265502929688 12.56500053405762 11.01162147521973 10.69633674621582 12.20943927764893 C 8.827674865722656 13.40725708007813 6.393033981323242 13.22977161407471 4.717846870422363 11.77360725402832 C 3.042660236358643 10.31744289398193 2.527979850769043 7.931215286254883 3.454000473022461 5.914000511169434 C 3.555971384048462 5.665886402130127 3.443979263305664 5.381513118743896 3.200206279754639 5.26956033706665 C 2.956433534622192 5.157607078552246 2.66775107383728 5.257969856262207 2.546000242233276 5.497000217437744 C 1.434823036193848 7.917786598205566 2.052634716033936 10.78134727478027 4.063076019287109 12.52864742279053 C 6.073515892028809 14.27594757080078 8.995233535766602 14.4886360168457 11.2375316619873 13.05091857910156 C 13.47983074188232 11.61320018768311 14.5058422088623 8.869303703308105 13.75696754455566 6.313110828399658 C 13.00809288024902 3.756919860839844 10.66363334655762 2.000452518463135 8.000001907348633 2 L 8 3 Z M 8 4.466000080108643 L 8 0.5339999794960022 C 7.999963760375977 0.437023401260376 7.943847179412842 0.3488165140151978 7.856023788452148 0.3076893091201782 C 7.768199920654297 0.2665620744228363 7.664514541625977 0.2799350023269653 7.590000152587891 0.3419999480247498 L 5.230000019073486 2.308000087738037 C 5.173041343688965 2.355498790740967 5.140112400054932 2.425835371017456 5.140112400054932 2.5 C 5.140112400054932 2.574164867401123 5.173041343688965 2.644501209259033 5.230000019073486 2.692000150680542 L 7.590000152587891 4.657999992370605 C 7.664514541625977 4.720065593719482 7.768199920654297 4.733438491821289 7.856023788452148 4.69231128692627 C 7.94384765625 4.651183605194092 7.999963760375977 4.562976837158203 8 4.466000080108643 Z"
          ></path>
        </svg>
      ) : (
        <svg className="Path_19_mib" viewBox="1.999 2 12.001 12">
          <path
            id="Path_19_mib"
            d="M 8 3 C 10.21961116790771 3.000855445861816 12.17296123504639 4.46489143371582 12.7966365814209 6.595078945159912 C 13.42031192779541 8.725265502929688 12.56500053405762 11.01162147521973 10.69633674621582 12.20943927764893 C 8.827674865722656 13.40725708007813 6.393033981323242 13.22977161407471 4.717846870422363 11.77360725402832 C 3.042660236358643 10.31744289398193 2.527979850769043 7.931215286254883 3.454000473022461 5.914000511169434 C 3.555971384048462 5.665886402130127 3.443979263305664 5.381513118743896 3.200206279754639 5.26956033706665 C 2.956433534622192 5.157607078552246 2.66775107383728 5.257969856262207 2.546000242233276 5.497000217437744 C 1.434823036193848 7.917786598205566 2.052634716033936 10.78134727478027 4.063076019287109 12.52864742279053 C 6.073515892028809 14.27594757080078 8.995233535766602 14.4886360168457 11.2375316619873 13.05091857910156 C 13.47983074188232 11.61320018768311 14.5058422088623 8.869303703308105 13.75696754455566 6.313110828399658 C 13.00809288024902 3.756919860839844 10.66363334655762 2.000452518463135 8.000001907348633 2 L 8 3 Z M 8 4.466000080108643 L 8 0.5339999794960022 C 7.999963760375977 0.437023401260376 7.943847179412842 0.3488165140151978 7.856023788452148 0.3076893091201782 C 7.768199920654297 0.2665620744228363 7.664514541625977 0.2799350023269653 7.590000152587891 0.3419999480247498 L 5.230000019073486 2.308000087738037 C 5.173041343688965 2.355498790740967 5.140112400054932 2.425835371017456 5.140112400054932 2.5 C 5.140112400054932 2.574164867401123 5.173041343688965 2.644501209259033 5.230000019073486 2.692000150680542 L 7.590000152587891 4.657999992370605 C 7.664514541625977 4.720065593719482 7.768199920654297 4.733438491821289 7.856023788452148 4.69231128692627 C 7.94384765625 4.651183605194092 7.999963760375977 4.562976837158203 8 4.466000080108643 Z"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default Arrowcircle;
